import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MovieList from "./Movies/MovieList"
import Movie from "./Movies/Movie"

import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <Router>
      <SavedList list={savedList} />

      <Route exact path="/" component={MovieList}/>

      <Route path="/movies/:id">       
        <Movie  addToSavedList={addToSavedList}/>
      </Route>

    </Router>
  );
};

export default App;
