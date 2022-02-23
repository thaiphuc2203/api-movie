import React, { useEffect } from "react";
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from "react-redux";
import ItemMovie from "../components/ItemMovie/index";
import MovieApi from '../api/movieApi';
import { fetchMoviePopular } from "../features/Movie/movieSlice";
var _ = require('lodash');


export default function Home(props: any) {

  let resultMovieApi: any
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchMoviePopular())
  },[dispatch])

  if (!!resultMovieApi) return <div>Loading</div>
  return (
    <div>
      <ItemMovie />
    </div>
  );
}
