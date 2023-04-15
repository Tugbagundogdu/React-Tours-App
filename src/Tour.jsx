import React from 'react';
import './App.css'
import { useState } from 'react';

const Tour = ({tour , deleteTourById }) => {
    const {id ,name , info , image , price} = tour;
    const text = info;
    const [readMore , setReadMore] = useState(true);

    const toggleReadMore = ()=>{
        setReadMore(!readMore);
        
    }

    const handleDelete = ()=>{
        deleteTourById(id);
    }
    
  return (
    <div className='tour'>
        <div className='images'>
        <img src={image} alt="" />
        </div>
        <div className='header'>
        <h2>{name}</h2>
        <p className='price'>$ {price}</p>
        </div>
        <p>
            {
                readMore ? text.slice(0 , 150) : text
            }

            <span className='readMore' onClick={toggleReadMore}>
                {
                    readMore ? `...read more` : `  show less`
                }
            </span>
        
        </p>
        <button onClick={handleDelete}>Not İnterested</button>
      
    </div>
  )
}

export default Tour
