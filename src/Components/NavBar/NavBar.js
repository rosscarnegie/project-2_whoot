import React, {useState} from 'react';
import SearchForm from '../SearchForm/SearchForm'
import {Routes, Route, Link} from "react-router-dom";
import './NavBar.css'

let  NavBar = ({handleSubmit, handleInputChange}) => {


    return (
<nav>
    <ul>
        <Link to='/'>
            <li>Home</li>
        </Link>
    </ul>
    <SearchForm handleSubmit={handleSubmit} handleInputChange={handleInputChange}/>
    </nav>  
    )
}

export default NavBar; 