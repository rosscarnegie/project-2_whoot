import React from 'react';
import './SearchForm.css'

let  SearchForm = () => {

    return (
       <form>
            <label>Lat: </label>
            <input type='text'></input>
            <label>Long: </label>
            <input type='text'></input>
            <input type='submit' value="Find" id="searchButton"></input>
        </form>
    )
}

export default SearchForm; 