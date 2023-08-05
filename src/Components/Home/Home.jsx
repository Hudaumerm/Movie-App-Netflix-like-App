import React, { useContext } from 'react'
import NavBar from '../NavBar/NavBar'
import { NewContext } from '../../App'
import RowSlides from '../RowSlides/RowSlides'
import Banner from '../Banner/Banner'

function Home() {
    const {requestdata,next}=useContext(NewContext)
  return (
    <div>
      
        
      <Banner url={requestdata.NowPlaying}/>
      <RowSlides url={requestdata.NowPlaying} title="NOW PLAYING" isLarge isColumn/>
      <RowSlides url={requestdata.AiringToday} title="AIRING TODAY"/>

      <RowSlides url={requestdata.Originals} title="ORIGINAL MOVIES" isLarge isColumn/>
      <RowSlides url={requestdata.UpcomingMovies} title="UPCOMING MOVIES" isLarge isColumn/>

      <RowSlides url={requestdata.LatestMovies} title="LATEST MOVIES" isSmall/>
      <RowSlides url={requestdata.PopularMovies} title="POPULAR MOVIES"/>
      <RowSlides url={requestdata.TrendingTvShows} title="TRENDING SHOWS"/>

      <RowSlides url={requestdata.TopRated} title="TOP RATED MOVIES"/>
      <RowSlides url={requestdata.TopRatedShows} title="TOP RATED SHOWS"/>

    </div>
  )
}

export default Home