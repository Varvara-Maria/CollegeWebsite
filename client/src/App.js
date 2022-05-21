import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router';
import MainPage from './mainPage/mainPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path ="/" exact element = {<MainPage/>}/>
        </Routes>  
      </BrowserRouter>
    </div>
  );
}

export default App;
