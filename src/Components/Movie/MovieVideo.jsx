import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API_KEY } from '../../Request'
import Youtube from 'react-youtube'

function MovieVideo() {
    const {id}=useParams()
    const [movies, setMovies] = useState([])

useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(async res=>{
    console.log("res:"+res.data)
    const ytbdata=await res.data.results;
    if(ytbdata.length!== 0){
      for(let i in ytbdata){
      setMovies(ytbdata[i])
      }
      console.log("data:"+ytbdata[0])
    }
    else{
        window.alert("Trailer not found")
      }
    
  })
  
}, [])


    const opts = {
        
        height:'500px',
        width: '100%' ,
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          
        },
        screen:{
            
        }
      };
      
  return (
    <div className='movie-video-page'>
       <div  className="movies-here">
       <Youtube  videoId={movies? movies.key: " "} opts={opts}  />
       </div>
    </div>
  )
}

export default MovieVideo