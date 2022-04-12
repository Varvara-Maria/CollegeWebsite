import React, { Component } from 'react';
import { Route } from 'react-router';
import MainPage from './components/MainPage/MainPage';

import './custom.css'


const App = () =>{
  return(
      <div>
        <Route path = "/" exact element = {<React.Fragment><MainPage/></React.Fragment>}/>
      </div>
  );

}

export default App;
