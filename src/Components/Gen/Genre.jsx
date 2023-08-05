import React, { useContext, useEffect, useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import { NewContext } from '../../App'
import { BsPlayCircle } from 'react-icons/bs'
import { CiCircleRemove } from 'react-icons/ci'
import { SlLike } from 'react-icons/sl'
import { MdExpandCircleDown } from 'react-icons/md'
import { IoMdStar } from 'react-icons/io'
import { API_KEY, imageUrl } from '../../Request'
import axios from 'axios'
import './Genre.css'

function Genre({gid}) {
    const {title}=useParams()
    const {requestdata}=useContext(NewContext)
    const [movies, setMovies] = useState([])
   
    
    useEffect(()=>{
       
        async function genreApi(){
            const response=await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${gid}`)
            const res=await response.data.results;
           
            setMovies(res)
            console.log("f"+res)
        }
        genreApi()
        
    },[])
  return (
    <section className='genre-movies'>
        <Container>
            <Row>
                <h2 className="h2 genre-title">here</h2>
<div className="genre-poster">
    <Row>
        {
            movies&&movies.map((movie)=>{
                return(
                    <Col lg={2} md={4} sm={6} xs={6}>
                    <Card className='row-card'>
                  <Card.Img variant="top" key={movie.id} className='poster' src={`${imageUrl+movie.poster_path} `} alt={movie.name} />
                  <Card.Body className='row-card-body'>
                    <Card.Title><BsPlayCircle/><CiCircleRemove className='remove-icone'/><SlLike/><Link to={`/details/${movie.id}`}><MdExpandCircleDown className='expand'/></Link>
                   </Card.Title>
                    <Card.Text>
                     <IoMdStar className='row-star'/>  IMDB: {movie? movie.vote_average : ""}/10 ({movie? movie.vote_count: ""})
            
                    </Card.Text>
                  </Card.Body>
                </Card>
                         
                    </Col>

                )
            })
        }
       
    </Row>
</div>
            </Row>

        </Container>


    </section>
  )
}

export default Genre