import React,{useCallback,useState} from"react";
import MovieInput from "./MovieInput";
import{moviesearch} from"../../api/MovieApi";
import { MovieFilter } from "./MovieFilter";
import { MovieData } from "./MovieData";
import { Loader } from "../Loader/Loader.jsx";
const Movie=()=>{
    const[mData,setmData]=useState([]);
    const [movieFilter,setMovieFilter]=useState("Movie");
    const [loading,setLoading]=useState(false);
    const movieSearchValue= async(movieName="")=>{
        setLoading(true);
        if(movieName&& movieName.length>4)
        {
            const movieData= await moviesearch({movieName,movieFilter});
            console.log({movieData});
            const {Search: movieSearchData=[]}=movieData;
            setmData(movieSearchData);
            setLoading(false);
            
        }
        setLoading(false);
    };
    const onMovieFilterHandler=useCallback((getMovieFilter)=>{
        console.log({getMovieFilter});
        setMovieFilter(getMovieFilter);

        },[setMovieFilter]
    );

    return(
        <>
         <MovieFilter onMovieFilterHandler={onMovieFilterHandler} />
      <MovieInput movieSearchValue={movieSearchValue} />
      {loading && (
        <Loader
          style={{ justifyContent: "center", marginTop: "1rem" }}
          color="success"
        />
      )}
      {!!mData.length && <MovieData data={mData} />}
      {!mData.length && (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          search to get your fav movie
        </p>
      )} 
    </>
        
        
    );
};
export default Movie;