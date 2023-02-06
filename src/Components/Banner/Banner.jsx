import React, { useEffect, useState } from 'react'
import "./Banner.css"
import { API_KEY ,imageUrl} from '../../Constants'
import Youtube from "react-youtube";
import axios from '../../Axios'

function Banner() {

    const[movie,setMovie]=useState([])
    const [urlId, setUrlId] = useState([]);


  useEffect(()=>{
    axios.get(`/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28&with_watch_monetization_types=flatrate `).then((response)=>{
      console.log(response.data.results[0])
      setMovie(response.data.results[
        Math.floor(Math.random() * response.data.results.length-1)  // if put 0 refreshing pic not change
      ])
    })
  },[])


  function truncate(string,n) { // or arrowfunction can used
    return string?.length > n ? string.substr(0, n-1)+ '...' : string;
    console.log('akk',movie )
}


// copied from documentation (react-youtube npm )
const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

const movieTrailer = (id) => {
  console.log(id);
  axios
    .get(`/movie/${movie.id}/videos?api_key=${API_KEY}&language=en=US`)
    .then((response) => {
      if (response.data.results.length !== 0) {
        setUrlId(response.data.results[0]);
      }
    }, []);
};


  return (
    <div className='banner-main'>
      

        <div style={{background-position: center; background-size: 100%; backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : " "})` }} className='banner'>
            <div className="content">
                <h1 className='title'>{movie  ? movie.title : ""}</h1> 
                <div className="banner_button">
                    <button className='button'  
                       onClick={() => {
                        movieTrailer(movie.id);
                        }}
                    >Play</button>
                    <button className='button'>My list</button>



                </div>
                <h1 className='description'>{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="fade_bottom"></div>
                    { urlId.key &&  <Youtube opts={opts} videoId={urlId.key}  /> }
        </div>


    </div>
  )
}

export default Banner
