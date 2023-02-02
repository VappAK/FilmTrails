import React, { useEffect, useState } from 'react'
import "./ItemsList.css"
import { imageUrl, API_KEY } from "../../Constants";
import axios from "../../Axios";
import Youtube from "react-youtube";

function ItemsList(props) {

    const [movies, setMovies] = useState([]);
    const [urlId, setUrlId] = useState([]);

    useEffect(() => {
        axios
          .get(props.url)
          .then((response) => {
            console.log(response.data);
            setMovies(response.data.results);
          })
          .catch((err) => {
            alert("Network Error");
          });
      }, [props]);



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
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en=US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      }, []);
  };

  return (
    <div>
      

      <div className="row">
            <h2 className="title_1">{props.title}</h2>

            <div className="posters">
                {movies.map((obj) => (
                <img
                    onClick={() => {
                    movieTrailer(obj.id);
                    }}
                    className={props.isSmall ? "smallPoster" : "poster"}
                    src={`${imageUrl + obj.backdrop_path}`}
                    alt="poster"
                />
                ))}
            </div>
            { urlId.key &&  <Youtube opts={opts} videoId={urlId.key}  /> }
        </div>


    </div>
  )
}

export default ItemsList
