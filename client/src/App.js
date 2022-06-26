import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage/mainPage';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import AdminPanel from './components/AdminPanel/AdminPanel';
import React from 'react';
import EditNewsItem from './components/AdminPanel/components/newsAdmin/EditNewsItem';
import PagesEditor from './components/AdminPanel/SharedForAdmin/Editor';
import PageEditor from './components/AdminPanel/components/pagesEditor/PageEditor';
import Page from './components/Shared/UniversalPage/Page';
import History from './components/HistoryPage/History';

import LinksOther from './components/Shared/LinksOther/LinksOther';
import AllNews from './components/NewsPage/AllNews';

import AdministrationPage from './components/Administration/AdministrationPage';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path ="/" exact element = {<MainPage/>}/>
          <Route path ="/admin" exact element = {<React.Fragment><AdminPanel/></React.Fragment>}/>
          <Route path ="/admin/newsEdit/:id" exact element = {<React.Fragment><EditNewsItem/></React.Fragment>}/>
          <Route path = "/admin/createNewPage/:section" exact element = {<React.Fragment><PageEditor/></React.Fragment>}/>
          <Route path = "/admin/editPage/:section/:id" exact element ={<React.Fragment><PageEditor/></React.Fragment>}/>
          <Route path = "/:section/:id" exact element ={<React.Fragment><Page/></React.Fragment>}/>
          <Route path ="/history" exact element = {<History />}/>

          <Route path ="/allnews" exact element = {<React.Fragment><AllNews/></React.Fragment>}/>

          <Route path ="/administration" exact element = {<AdministrationPage />}/>

        </Routes> 
        <LinksOther/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
