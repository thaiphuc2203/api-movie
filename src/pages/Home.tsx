import { Grid } from "@mui/material";
import React, { Fragment,useState,  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/ItemMovie/index";
import { fetchMoviePopular, fetchMovieSearch  } from "../features/Movie/movieSlice";
import { ItemMovie, ListMovie, TitleSearch } from "../models";
import { RootState } from "../app/index";
import SearchBar from "../components/searchBar";
const _ = require('lodash');  

export default function Home() {
  const dispatch = useDispatch();

  const movieList = useSelector((state: RootState) => {
    return state.movie;
  });

  const [valueSearch, setValueSearch] = useState<TitleSearch>({title: ''});
  useEffect(() => {
    dispatch(fetchMoviePopular());
  }, [dispatch]);

  if (!!movieList.result) return <div>Loading</div>;
  const handleSearch = (e: { target: { value: string} }) =>{
    setValueSearch({title: e.target.value})
  }

  const clickSearch = () => {
    if (_.isEmpty(valueSearch.title)) {
      dispatch(fetchMoviePopular())
    } else {
      dispatch(fetchMovieSearch(valueSearch.title));
    }
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} md={12} lg={12}>
        <SearchBar value = {valueSearch} onSearch = { (e: any) => handleSearch(e) } clickSearch = {() => clickSearch()} />
      </Grid>
        {movieList.results.map((el: ItemMovie, index: number) => (
          <Grid key= {index} item xs={6} md={4} lg={3}>
            <Movie item={el} />
          </Grid>
        ))}
    </Grid>
  );
}
