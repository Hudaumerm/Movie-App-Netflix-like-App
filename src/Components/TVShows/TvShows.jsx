import React, { useContext } from 'react'
import RowSlides from '../RowSlides/RowSlides'
import { NewContext } from '../../App'
import Banner from '../Banner/Banner'

function TvShows() {
    const {requestdata}=useContext(NewContext)

  return (
    <div>
 <Banner url={requestdata.AiringToday}/>
  <RowSlides url={requestdata.TrendingTvShows} title="TRENDING SHOWS"/>
  <RowSlides url={requestdata.AiringToday} title="AIRING TODAY"/>
  <RowSlides url={requestdata.TopRatedShows} title="TOP RATED SHOWS"/>


    </div>
  )
}

export default TvShows