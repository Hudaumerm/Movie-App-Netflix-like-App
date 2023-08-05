import React, { useContext } from 'react'
import RowSlides from '../RowSlides/RowSlides'
import { NewContext } from '../../App'

function BrowseByGenre() {
    const {requestdata}=useContext(NewContext)

  return (
    <div className='genre' >
      
         <RowSlides url={requestdata.Action} title="ACTION" isMargin gid={28}/>
       
       <RowSlides url={requestdata.Adventure} title="ADVENTURE" gid={12} />
       <RowSlides url={requestdata.Animation} title="ANIMATION" gid={16}/>
 
       <RowSlides url={requestdata.Comedy} title="COMEDY" gid={35} />
       <RowSlides url={requestdata.Crime} title="CRIME" gid={80}/>
       <RowSlides url={requestdata.Documentary} title="DOCUMENTARY" gid={99}/>
       <RowSlides url={requestdata.Drama} title="DRAMA" gid={18}/>
       <RowSlides url={requestdata.Family} title="FAMILY" gid={10751}/>
       <RowSlides url={requestdata.Fantasy} title="FANTASY" gid={14}/>
       <RowSlides url={requestdata.History} title="HISTORY" gid={36}/>
       <RowSlides url={requestdata.Horror} title="HORROR" gid={27}/>
       <RowSlides url={requestdata.Mystery} title="MYSTERY" gid={9648}/>
       <RowSlides url={requestdata.Romance} title="ROMANCE" gid={10749}/>
       <RowSlides url={requestdata.TvMovies} title="TV MOVIES" gid={10770}/>
       <RowSlides url={requestdata.ScienceFiction} title="SCIENCE FICTION" gid={878}/>
       <RowSlides url={requestdata.Thriller} title="THRILLER" gid={53}/>
       <RowSlides url={requestdata.War} title="WAR" gid={10752}/>
      
    </div>
  )
}

export default BrowseByGenre