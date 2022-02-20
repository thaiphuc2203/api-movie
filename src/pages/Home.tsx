import React, { useEffect } from "react";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import ItemMovie from "../components/ItemMovie/index";
import { fetchMoviePopular, increment } from "../features/Movie/movieSlice";
var _ = require('lodash');

export default function Home(props: any) {
  console.log(fetchMoviePopular(), 'xx')
  const action = fetchMoviePopular()
  const dispatch = useDispatch();
  const resultAction: any = dispatch(increment(action));
  const movie = unwrapResult(resultAction);
  let resultMovieApi: any
  useEffect(() => {
  }, []);

  if (!!resultMovieApi) return <div>Loading</div>
  return (
    <div>
      <ItemMovie />
    </div>
  );
}
