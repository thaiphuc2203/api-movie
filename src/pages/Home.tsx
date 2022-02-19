import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar/index";
import ItemMovie from "../components/ItemMovie/index";
import {fetchMoviePopular} from "../features/Movie/movieSlice";
var _ = require('lodash');

export default function Home(props: any) {
  const dispatch = useDispatch();
  let resultMovieApi: any
  useEffect(() => {
    resultMovieApi = dispatch(fetchMoviePopular());
  }, []);

  if (!!resultMovieApi) return <div>Loading</div>
  console.log("resultMovieApi",resultMovieApi);
  return (
    <div>
      <SearchBar />
      <ItemMovie />
    </div>
  );
}
