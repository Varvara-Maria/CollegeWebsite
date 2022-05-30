import './App.css';
import {BrowserRouter} from 'react-router-dom';
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage/mainPage';
import Header from './components/Shared/Header/Header';
import Footer from './components/Shared/Footer/Footer';
import History from './components/HistoryPage/History';

function App() {
  return (
    <div className="App">

      

     <BrowserRouter>
     <Header/>
        <Routes>
        
          <Route path ="/" exact element = {<MainPage/>}/>
          <Route path ="/history" exact element = {<History />}/>
        </Routes> 
      <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
