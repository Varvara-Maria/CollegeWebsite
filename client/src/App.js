import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Route, Routes } from 'react-router';
import MainPage from './components/MainPage/mainPage';
import Header from './components/Shared/Header/Header';
function App() {
  return (
    <div className="App">

      

     <BrowserRouter>
     <Header/>
        <Routes>
        
          <Route path ="/" exact element = {<MainPage/>}/>
        </Routes> 
        
      </BrowserRouter>

    </div>
  );
}

export default App;
