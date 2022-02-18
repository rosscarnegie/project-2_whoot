import React, {useState} from 'react';
import SearchForm from '../SearchForm/SearchForm'
import './NavBar.css'

let  NavBar = ({handleSubmit, handleInputChange}) => {


    return (
<nav>
    <ul>
        <li>Home</li>
    </ul>
    <SearchForm handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
    </nav>  
    )
}

export default NavBar; 