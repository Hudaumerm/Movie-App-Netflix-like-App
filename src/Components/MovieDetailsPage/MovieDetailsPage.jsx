import React, { useContext, useEffect, useState } from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import './MovieDetailsPage.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { FaPause, FaPlay, FaStop } from 'react-icons/fa'
import { useParams } from 'react-router-dom'
import { NewContext } from '../../App'
import axios from 'axios'
import { API_KEY, imageUrl, yVideos } from '../../Request'
import { SlLike } from 'react-icons/sl'
import { BsFillPlusCircleFill, BsStarFill } from 'react-icons/bs'
import Youtube from 'react-youtube'

function MovieDetailsPage() {
  const {requestdata,myList,setMylist}=useContext(NewContext)
  let {id}=useParams()
  console.log("title:"+id)
  const [movies, setMovies] = useState([{}])
  const [youtube, setYoutube] = useState(false)
  const [data, setdata] = useState()


  useEffect(() => {
    
    async function fetchApi(){
      try{
        const response=await axios.all([axios.get(requestdata.Originals),axios.get(requestdata.LatestMovies),axios.get(requestdata.PopularMovies),axios.get(requestdata.UpcomingMovies),axios.get(requestdata.NowPlaying),
        axios.get(requestdata.TopRated),axios.get(requestdata.TrendingTvShows),axios.get(requestdata.AiringToday),axios.get(requestdata.TopRatedShows),axios.get(requestdata.AllMovies)]);
        const res=response.map((response)=>response.data.results)
        const flatData=res.flat()
      //filter unique data
 let data = []
let uniqueObject={}

for (let i in flatData){
let obj=flatData[i]['id']
uniqueObject[obj]=flatData[i]
}
 for (let i in uniqueObject){
  data.push(uniqueObject[i])
 }



        setMovies(data)
        console.log("response:"+response)
        console.log("mov1="+movies)
        
      }catch{
        throw Error("promise failed")
      }

        
        }  
 fetchApi()
 


 
},[])

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

  // async function youtubeApi(){
  //  try{
  //    const youtubeResponse=await axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
  //    console.log("youTube:"+youtubeResponse)
  //    const youtubeResp=await youtubeResponse.data.results[0]
  //    setYoutube(youtubeResp)

  //  }catch{
  //    throw Error("No Trailer Found")
  //  }
  // }
  

const mov=movies.filter((data)=>data.id == id)
console.log("mov:"+mov)

//youtube frame settings
const opts = {
  height: '390',
  width: '100%' ,
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

//add to my list function 
const handleAddtoList=(id)=>{
  const mylistdata=movies.filter((movies)=>movies.id === id)
  const mydata=[...myList, mylistdata]
const flatData=mydata.flat()

 //filter unique data
let newArray = []
let uniqueObject={}

for (let i in flatData){
let obj=flatData[i]['id']
uniqueObject[obj]=flatData[i]
}
for (let i in uniqueObject){
newArray.push(uniqueObject[i])
}
setMylist(newArray)
console.log("mylist:"+myList)
}

  return (
    <section className='movie-details-section'>
      
        <Container className='movie-details'>
        <Row >

          {mov.map((movies)=>{
            return(
              <>
              <Row className='movie-info' >
                <div className="movie-image">
                {youtube? <Youtube  videoId={data? data.key: " "} opts={opts}/>:
                 <Image className='movie-image' src={` ${movies? imageUrl+movies.poster_path : ""}`} alt={movies.name}/>}
                 
                <div className="movie-title">
                  <h2 className="h2 text-uppercase font-weight-bold">{movies? movies.original_name:""}{movies? movies.original_title:""}</h2>
                </div>
                <div className="header-buttons">
                <button className="btn-play1" onClick={()=>handlePlay(movies.id)}>{youtube? <><FaStop/> Stop</> : <><FaPlay /> Play</> }</button>
                <BsFillPlusCircleFill className='plus' onClick={()=>{handleAddtoList(movies.id)}}/>
                <SlLike className='like'/>
                <div className="rating">
                <h6 className="h6"><BsStarFill/>IMDB: {movies? movies.vote_average +'/10' +'('+ movies.vote_count+ ')' :""}</h6>
                </div>
            </div>

                </div>
                
            <div className="movie-genre-lang">
              <h6 className="h6">Language: {movies? movies.original_language:""}</h6>
              <h6 className="h6">Release Data: {movies? movies.release_date:""}</h6>
              </div>
             

                


              </Row>
              <Row>
                <div className="movie-overview">
                  <p className="lead font-weight-normal text-monospace">{movies? movies.overview: ""}</p>
                </div>

                </Row>


              
</>
           
        //     <div className="header-details-page" >
        //     <div className="info" >
        //             <div className="header-title-div">
        //     <h1 className="h1 header-title">{movies? movies.name:""}</h1>
        //     </div>
           
        //     <div className='header-description-div'>
        //     <h1 className="h1 header-description ">{movies? movies.overview: ""}</h1>
        // </div>
        // <div className="header-buttons">
        //         <button className="play btn-play btn"><FaPlay/> Play</button>
        //         <button className="more-info btn"><AiOutlineInfoCircle/> More Info</button>
        //     </div>
        // <div className="fade-bottom"></div>
        // </div>
        //     </div>
 )
})}
</Row>
        </Container>
    </section>
  )
}

export default MovieDetailsPage