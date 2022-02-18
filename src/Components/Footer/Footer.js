import React from 'react';
import './Footer.css'
import {Routes, Route, Link} from "react-router-dom";
import Privacy from '../../Pages/Privacy';
import Issue from '../../Pages/Issue';
import ThumbNailsList from '../ThumbNailsList/ThumbNailsList';

let  Footer = () => {

    return (
        <footer>
               
            <ul>
                <Link to='/Issue'>
                <li>Report An Issue</li>
                </Link>
                <Link to='/Privacy'>
                <li>Privacy</li>
                </Link>
            </ul>
        </footer>
    )
}

export default Footer; 