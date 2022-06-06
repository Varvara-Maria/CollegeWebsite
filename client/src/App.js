import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage/mainPage';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import AdminPanel from './components/AdminPanel/AdminPanel';
import React from 'react';
import EditNewsItem from './components/AdminPanel/components/newsAdmin/EditNewsItem';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path ="/" exact element = {<MainPage/>}/>
          <Route path ="/admin" exact element = {<React.Fragment><AdminPanel/></React.Fragment>}/>
          <Route path ="/admin/newsEdit/:id" exact element = {<React.Fragment><EditNewsItem/></React.Fragment>}/>

        </Routes> 
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
