import React, {useState} from 'react';
import './ThumbNailsList.css';
import ThumbNail from '../ThumbNail/Thumbnail';
import ThumbNailStartData from '../ThumbNail/ThumbNailStartData'

let  ThumbNailsList = ({latitude, longitude, handleSubmit, displayedThumbs}) => {
    const mappedThumbnails = displayedThumbs.map((singleThumbnail, index) => (   
    
        

            <div className='thumbNail'
            key={index}><p>{singleThumbnail.comName}</p>
            <p>{singleThumbnail.sciName}</p></div>
        ))

    return(<main className='thumbNailsList'>       
        {mappedThumbnails}
    </main>
 
        )

    }
      //<div key={index} className="thumbNail"><p>{singleThumbnail.comName}</p></div>
      

export default ThumbNailsList; 