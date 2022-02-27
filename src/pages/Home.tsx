import { Grid } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/ItemMovie/index";
import { fetchMoviePopular } from "../features/Movie/movieSlice";
import { ItemMovie, ListMovie } from "../models";
import { RootState } from "../app/index";

export default function Home() {
  const dispatch = useDispatch();
  const movieList = useSelector((state: RootState) => {
    return state.movie;
  });

  useEffect(() => {
    dispatch(fetchMoviePopular());
  }, [dispatch]);

  if (!!movieList.result) return <div>Loading</div>;
  return (
    <Grid container spacing={1}>
      {movieList.results.map((el: ItemMovie) => (
        <Grid item xs={6} md={4} lg={3}>
          <Movie item={el} />
        </Grid>
      ))}
    </Grid>
  );
}
