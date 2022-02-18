import React from 'react';
import './ThumbNail.css'
import ThumbNailStartData from './ThumbNailStartData'

let  ThumbNail = ({latitude, longitude, handleSubmit}) => {

    const mappedThumbnails = ThumbNailStartData.map((singleThumbnail, index) => {   
    
        return(

            <div key={index} className="thumbNail"><p>{singleThumbnail.comName}</p></div>
        )
    })

}

export default ThumbNail; 