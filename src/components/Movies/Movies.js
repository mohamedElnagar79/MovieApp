import React from "react";

import { useContext } from "react";
import "./MoviesStyle.css";
import MoviesCard from "./MoviesCard/MoviesCard"
import { useSelector } from "react-redux";
// import {getMovies} from "../../Store/Actions/Movies";
import { LangContext } from "../../langContext";


function Movies({setData}) {
  const value = useContext(LangContext);
  console.log("lang value from movie is ",value)

  const {movies} = useSelector((state)=>state.movies)
  //  const dispatch =  useDispatch()
  //  useEffect(() => {
  //     dispatch(getMovies())
  // },[]);

  return (
    < >
      <div className="row row-cols-1 row-cols-md-4 g-0 ">
        { 
          movies?.map(movie=>{
            return (
              <div className="col" key={movie.id}>
                <div className="m-4">
                <MoviesCard 
                movie={movie}
                />
                </div>
                
              </div> 
            )
          })
        }
        
      </div>
    </>
  );
}

export default Movies;
