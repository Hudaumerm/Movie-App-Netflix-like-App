import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import { createContext,  useState } from 'react';
import requests from './Request';
import RowSlides from './Components/RowSlides/RowSlides';
import Banner from './Components/Banner/Banner';
import MovieDetailsPage from './Components/MovieDetailsPage/MovieDetailsPage';
import MyList from './Components/MyList/MyList';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import MovieVideo from './Components/Movie/MovieVideo';
import TvShows from './Components/TVShows/TvShows';
import Movies from './Components/Movies/Movies';
import BrowseByGenre from './Components/BrowseByGenre/BrowseByGenre';
import Genre from './Components/Gen/Genre';

const NewContext=createContext()
function App() {
  const [requestdata, setRequestdata] = useState(requests)
  console.log(requestdata)
  const [myList,setMylist]=useState([])
  const[next,setNext]=useState()
  const[first,setFirst]=useState(true)


  
  return (
    <div className="App">
      <BrowserRouter>
   
   
   
      <NewContext.Provider value={{requestdata,setRequestdata,myList,setMylist,next,setNext,first,setFirst}}>
       <NavBar/>
        <Routes>
   <Route path="/"  element={<Home/>}/>
   <Route path="/mylist" element={<MyList/>}/>
  <Route path={'/details/:id'} element={<MovieDetailsPage/>}/>
  <Route path={'/details/:id'} element={<MovieDetailsPage />}/>
  <Route path={'/details/:id'} element={<MovieDetailsPage />}/>
  <Route path={'/tvshows'} element={<TvShows />}/>
  <Route path={'/moviesonly'} element={<Movies/>}/>
  <Route path={'/browsebygenre'} element={<BrowseByGenre/>}/>


   </Routes>

      <Footer/>
      
      
      
      
     </NewContext.Provider>
     </BrowserRouter>
     

     
    </div>
  );
}

export default App;
export {NewContext}
