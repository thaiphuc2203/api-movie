import React, { Component } from 'react';
import  SearchBar  from '../components/SearchBar/index';
import  ItemMovie  from '../components/ItemMovie/index';

export default class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ItemMovie />
      </div>
  );
  }
}
