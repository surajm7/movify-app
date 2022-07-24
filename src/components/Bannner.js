import React,{useState,useEffect} from 'react'
// rfce
import Image from '../banner.jpg'
import axios from 'axios';

function Bannner() {

  const [movie, setMovie] = useState({});
  useEffect(function(){
     axios
    .get(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=e33fc453c4cce6cc01c06c6f3ec76626"
    )
    .then((res) => {
      console.table(res.data.results);
      setMovie(res.data.results[0]);
    },[]); 


  })
  // axios
  //   .get(
  //     "https://api.themoviedb.org/3/trending/movie/week?api_key=e33fc453c4cce6cc01c06c6f3ec76626"
  //   )
  //   .then((res) => {
  //     console.table(res.data.results);
  //     setMovie(res.data.results[0]);
  //   },[]);  
  return (
    <>
    <div className=
    {`bg-[url(https ://image.tmdb.org/t/p/original/${movie.backdrop_path})]  
    h-[40vh]
    md:h-[60vh] 
    bg-center bg-cover 
    flex items-end   p-4
    `}>
        <div className='text-xl md:text-3xl text-white bg-gray-900
        bg-opacity-50
        w-full
        flex justify-center
         '>
           {movie?.title}
        </div>
    </div>
    
    </>
  )
}

export default Bannner