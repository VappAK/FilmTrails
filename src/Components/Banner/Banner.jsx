import React, { useEffect, useState } from 'react'
import "./Banner.css"
import { API_KEY ,imageUrl} from '../../Constants'
import axios from '../../Axios'

function Banner() {

    const[movie,setMovie]=useState([])


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


  return (
    <div>
      

        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : " "})` }} className='banner'>
            <div className="content">
                <h1 className='title'>{movie  ? movie.title : ""}</h1> 
                <div className="banner_button">
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <h1 className='description'>{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>


    </div>
  )
}

export default Banner
