import React, {useState} from 'react';
import './ThumbNailsList.css';
import ThumbNailStartData from '../ThumbNailsList/ThumbNailStartData';

let displayedThumbs = ThumbNailStartData;


let ThumbNailsList = ({latitude, longitude, handleSubmit, displayedThumbs}) => {
    
    const mappedThumbnails = displayedThumbs?.map((singleThumbnail, index) => {  

    return (
        <div className='thumbNail' key={index}>
            <p>{singleThumbnail.comName}</p>
            <p>{singleThumbnail.sciName}</p>
        </div>
        )
    })

    return (
        <main className='thumbNailsList'>       
            {mappedThumbnails}
        </main>
    )

}      

export default ThumbNailsList; 