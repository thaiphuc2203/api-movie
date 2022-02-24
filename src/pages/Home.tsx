import { Grid } from "@mui/material";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/ItemMovie/index";
import { fetchMoviePopular } from "../features/Movie/movieSlice";
import { ItemMovie } from "../models";

export default function Home(props: any) {
  const dispatch = useDispatch();
  const movieList = useSelector((state: any) => state.movie);

  useEffect(() => {
    dispatch(fetchMoviePopular());
  }, [dispatch]);

  if (!!movieList.result) return <div>Loading</div>;
  return (
    <Grid container spacing={2}>
      {movieList.results.map((el: ItemMovie) => (
        <Grid item xs={12} md={3}>
          <Movie item={el} />
        </Grid>
      ))}
    </Grid>
  );
}
