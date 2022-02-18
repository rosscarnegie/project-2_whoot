import React, {useState} from 'react';
import './SearchForm.css'

let  SearchForm = ({handleSubmit, handleInputChange, latitude, longitude}) => {

    
    return (
        <form className='coordForm' onSubmit={handleSubmit}>
        <input type='text' name='latitude' placeholder='Latitude' value={latitude} onChange={handleInputChange}/>
        <input type='text' name='longitude' placeholder='Longitude' value={longitude} onChange={handleInputChange}/>
        <button>Find</button>
      </form>
    )
}

export default SearchForm; 