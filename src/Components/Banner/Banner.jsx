import './Banner.css'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import { NewContext } from '../../App'
import axios from 'axios'
import { API_KEY, imageUrl } from '../../Request'
import { FaPlay, FaStop } from 'react-icons/fa'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Youtube from 'react-youtube'


function Banner({url}) {
    const {requestdata}=useContext(NewContext)
    const [movies, setMovies] = useState([])
    const [data, setdata] = useState()
    const [youtube, setYoutube] = useState(false)

useEffect(() => {
    async function fetchApi(){
        const response=await axios.get(url);
        const arr=await response.data.results;
        const resp=arr[(Math.floor(Math.random() * arr.length))]
       console.log(resp)
        setMovies(resp)
    }

    fetchApi()

 
}, [])
// youtube video api fetching
const handlePlay=(id)=>{
  
    setYoutube(!youtube)
    console.log("playId:"+id)
  
    axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(async res=>{
      console.log("res:"+res.data)
      const ytbdata=await res.data.results;
      if(ytbdata.length!== 0){
        setdata(ytbdata[0])
        console.log("data:"+ytbdata[0])
      }
      else{
          window.alert("Trailer not found")
        }
      
    })
    
    }
  //youtube frame settings
const opts = {
    height: '390',
    width: '100%' ,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <section className='banner' >
           <Row className="bg-banner" style={{backgroundImage:`url(${movies? imageUrl+movies.poster_path : ""})`}} >
                <div className="banner-content">
                   
            <h1 className="h1 banner-title">{movies? movies.title : ""}</h1>
          
           
            <div className='banner-description-div'>
            <p className="h6 banner-description ">{movies? movies.overview: ""}</p>
        </div>
       
        <div className="banner-buttons">
                <Button variant='light play'  onClick={()=>handlePlay(movies.id)}>{youtube? <><FaStop/> Stop</> : <><FaPlay /> Play</> }</Button>
                <Link to={`/details/${movies.id}`}><Button variant="dark more-info1"><AiOutlineInfoCircle/> More Info</Button></Link>
            </div>
       
        </div>
        <div className="fade-bottom"></div>
        </Row>
         {youtube &&<Youtube  videoId={data? data.key: " "} opts={opts}/>}
           
        


    </section>
  )
}

export default Banner