import React, { useContext, useState } from 'react'
import './MyList.css'
import NavBar from '../NavBar/NavBar'
import { Alert, Card, Col, Container, Row } from 'react-bootstrap'
import { BsFillHeartFill, BsFillPlusCircleFill, BsPlayCircle } from 'react-icons/bs'
import { SlLike } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import {CiCircleRemove} from 'react-icons/ci'
import { IoMdStar } from 'react-icons/io'
import { imageUrl } from '../../Request'
import { MdExpandCircleDown } from 'react-icons/md'
import { NewContext } from '../../App'

function MyList() {
  const {myList,setMylist,next,setNext}=useContext(NewContext)
  console.log("mylistnew:"+myList)
//    const flatData=myList.flat()
//    console.log("flatData:"+flatData)

//    //filter unique data
//  let newArray = []
//  let uniqueObject={}

//  for (let i in flatData){
//   let obj=flatData[i]['id']
//   uniqueObject[obj]=flatData[i]
//  }
//  for (let i in uniqueObject){
//   newArray.push(uniqueObject[i])
//  }


 //for delete icone
 const handleDelete=(id)=>{
  setMylist(myList.filter((newArray)=>newArray.id != id))
 }
  return (
    <section className='list'>
      <Container fluid className='list-container '>
        <div>
      <Row className='row-list' id="page">
    
    <h2 className="h2 list-section-title">My List</h2>
   
    <div className='row-posters-list' id="row-poster">
       <Row>
        {myList.map((movie,index)=>{
            return(
                
             <Col className="col-list" lg={2} md={3} sm={4} xs={4}>

               <Card className='row-card'>
      <Card.Img variant="top" key={movie.id} className='poster' src={`${imageUrl+movie.poster_path} `} alt={movie.name} />
      <Card.Body className='row-card-body'>
        <Card.Title><BsPlayCircle/><CiCircleRemove className='remove-icone' onClick={()=>handleDelete(movie.id)}/><SlLike/><Link to={`/details/${movie.id}`}><MdExpandCircleDown className='expand'/></Link>
       </Card.Title>
        <Card.Text>
         <IoMdStar className='row-star'/>  IMDB: {movie? movie.vote_average : ""}/10 ({movie? movie.vote_count: ""})

        </Card.Text>
      </Card.Body>
    </Card>
             
             
             </Col>

            )
        }
        
        )}
       
       </Row>

    </div>
   </Row>
  </div>
    
   

     
       </Container>
    </section>
  )
}

export default MyList