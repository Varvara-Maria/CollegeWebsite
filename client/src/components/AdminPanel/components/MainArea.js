import React from 'react'
import './mainArea.css'
import NewsAdmin from './newsAdmin/NewsAdmin';


const MainArea = ({menuState}) => {
  return (
    <div className ="mainArea">
      <div className="adminContainer">
        {(function (){
          switch(menuState){
            case 1 : return (<p>{menuState}</p>);
            case 2 : return (<p>{menuState}</p>);
            case 3 : return (<p>{menuState}</p>);
            case 4 : return (<p>{menuState}</p>);
            case 5 : return (<p>{menuState}</p>);
            case 6 : return (<p>{menuState}</p>);
            case 7 : return <NewsAdmin/>;
            default :
              return (<h1 style = {{textAlign:"center"}}>Виберіть елемент який хочете редагувати!</h1>);
          }})()
        }
      </div>

    </div>
  )
}

export default MainArea