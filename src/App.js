import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React,{useState} from 'react';
import MovieList from './Pages/MovieList'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import MovieDescription from './Pages/MovieDescription';
function App() {
  const [movies, setMovies] = useState([
    {
      id:uuidv4(),
    title : 'There is Someone Inside Your House ',
    posterUrl :'https://i2.wp.com/www.nightmarishconjurings.com/wp-content/uploads/2021/09/EN-US_TSIYH_Main_Vertical_27x40_RGB_PRE-e1631547287437.jpg?resize=600%2C889&ssl=1',
    rating :5,
    description :'There is Someone Inside Your House is a suspense-thriller where the graduating class of Osborne High is targeted by a masked killer, who is ready to expose his victims darkest secrets.The movie was released on October 6, 2021, on Netflix.',
    trailer :'https://www.youtube.com/embed/IdZ43OuZXjQ'
   },
      
    {
      id:uuidv4(),
      title : 'Baby Driver' ,
      posterUrl :'https://media.services.cinergy.ch/media/box1600/b84396c418f19eb817b8b39f5351f5de07c5740f.jpg',
      rating :3,
      description :'Baby Driver is a 2017 action film written and directed by Edgar Wright.It stars Ansel Elgort as a getaway driver seeking freedom from a life of crime with his girlfriend Debora (Lily James) He devised the idea while in his youth, and his early directing experience further shaped his ambitions for Baby Driver',
      trailer:'https://www.youtube.com/embed/z2z857RSfhk'
     },
     {
      id:uuidv4(),
      title : 'The Tomorrow War' ,
      posterUrl :'https://antredeluciole.fr/wp-content/uploads/the-tomorrow-war-2021jpg.jpg',
      rating :4,
      description:'The film was described as a dark and emotional sci-fi action epic abouta generation of people who get drafted to go 30 years in the future to fight a losing war against aliens',
      trailer:'https://www.youtube.com/embed/QPistcpGB8o'
     },
     {
      id:uuidv4(),
      title : 'The Sweet Girl' ,
      posterUrl :'https://cdn.traileraddict.com/content/netflix/sweet-girl-poster.jpg',
      rating :3,
      description :'Aug 20, 2021 — It is about a man trying to get revenge for his wife is death from cancer at the hands of a depraved and indifferent pharmaceutical company while',
      trailer:'https://www.youtube.com/embed/NiFuJV2GLkY'
     },
  ])
  return (
    <>
    <Navbar/>
   <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/movielist" element={<MovieList movies={movies} />}/>
       <Route path="/movieDescription/:MovieId" element={<MovieDescription movies={movies} />}/>
   </Routes>
   </>
  );
}

export default App;
