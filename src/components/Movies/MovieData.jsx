import React from"react";
import {Grid}from"@mui/material";
import MovieCard from "../../shared/movieCard";
export const MovieData= (props)=>{
    console.log(props);
    const{data=[]}=props;

return(
    <>
    <Grid
        container
        spacing={2}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        marginTop={"1rem"}
      >
        <Grid item>
          {!!data.length &&
            data.map((movie, index) => (
              <>
                <MovieCard
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                  id={movie.imdbID}
                  type={movie.Type}
                />
              </>
            ))}
          {!data.length && (
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              No movie found
            </p>
          )}
        </Grid>
      </Grid>
    
    </>
)

}