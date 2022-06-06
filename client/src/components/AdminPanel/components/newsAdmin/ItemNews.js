import React from 'react'
import './newsEdit.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const ItemNews = ({item}) => {
    let navigate = useNavigate();
  return (
    <div className = "newsItem">
        <h2>{item.title}</h2>
        <div className="item">
            <div className="image">
                <img src={item.mainImage || "https://www.groupestate.gr/images/joomlart/demo/default.jpg"} alt={item.title} />
            </div>
            <div className="info">
                <p>{item.description}</p>
            </div>
        </div>
        <div className="crud_buttons">
            <Button color="secondary" onClick = {()=>navigate(`/admin/newsEdit/${item.id}`)}>Редагувати</Button>
            <Button variant="outlined" color="error">
                Видалити новину
            </Button>
        </div>
    </div>
  )
}

export default ItemNews