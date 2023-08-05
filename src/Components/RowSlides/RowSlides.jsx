import React, { createContext, useContext, useEffect, useState } from 'react'
import { Alert, Card, Col, Container, Image, Row, div } from 'react-bootstrap'
import { NewContext } from '../../App'
import axios from 'axios'
import instance from '../../axios'
import requests, { API_KEY, imageUrl } from '../../Request'
import './RowSlides.css'
import {BsFillHeartFill, BsFillPlusCircleFill, BsHeart, BsPlayCircle, BsStarFill, BsStop, BsStopCircle } from 'react-icons/bs'
import {SlLike } from 'react-icons/sl'
import {MdExpandCircleDown} from 'react-icons/md'
import { Link, NavLink } from 'react-router-dom'
import {IoMdStar} from 'react-icons/io'
import Youtube from 'react-youtube'


function RowSlides({title,url,isLarge,isSmall}) {
    const {requestdata,myList,setMylist,next,setNext,first,setFirst}=useContext(NewContext)
    const [youtube,setYoutube]=useState(false)
    const [data,setdata]=useState()
    console.log("value:"+requestdata)
    const [movies, setMovies] = useState([])
    const [myId,setMyid] = useState()
    console.log('myId:'+myId)

   

  
    
    useEffect(() => {
    
        async function fetchApi(){
            const response=await axios.get(url);
           const res=await response.data.results;
            console.log(response)
            setMovies(res)
           
    }
    
     fetchApi()
    
     
    },[])

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

        
        //setting className for heart icone
      //   const newIds=myList.flat()
      //   const lastIds=newIds.map((idx)=> idx.id === id)
      //  setMyid(lastIds)
      //  console.log("newids:"+lastIds)
      //  setNext(!next)

    }
    // const colorChange=myList.every((value)=>value.id === id)
  
    //youtube video fetch
  const handlePlay=(id)=>{
    setYoutube(!youtube)
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

    //function for stop the video
    const handleStop=()=>{
      setYoutube(!youtube)
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
   <>
    <Row className='row-movies' id="page">
    
    <h5 className="h5 title-section">{title}</h5>
   
    <div className='row-posters' id="row-poster">
       
        {movies.map((movie,index)=>{
            return(
                
             <Col>

             <Card className={`row-card ${isLarge && "large-card"} `}>
      <Card.Img variant="top" key={movie.id} className={`poster ${isLarge && 'poster-large'}`} src={`${imageUrl+movie.poster_path}`} alt={movie.name} />
      <Card.Body className={`row-card-body  ${isLarge && 'large-row-card-body'}`}>
        <Card.Title> {youtube?<BsStopCircle onClick={handleStop}/>:<BsPlayCircle onClick={()=>{handlePlay(movie.id)}}/>}
        <BsFillHeartFill  key={movie.id} className={myList.some((id)=>myList.id === movie.id) ? "heart-icone-like": "heart-icone-dislike"} onClick={()=>handleAddtoList(movie.id)}/>
        
         <SlLike/><Link to={`/details/${movie.id}`}><MdExpandCircleDown className='expand'/></Link>
       </Card.Title>
        <Card.Text>
         <IoMdStar className='row-star'/>  IMDB: {`${movie.vote_average}/10 (${movie.vote_count})`}

        </Card.Text>
      </Card.Body>
    </Card>
             
             
             </Col>

            )
        }
        
        )}
       


    </div>
   </Row>
   {youtube &&<Youtube  videoId={data? data.key: " "} opts={opts}/>}

     
  </>
  )
}

export default RowSlides
