import React from 'react';
import Picture from '../Picture/Picture';
import FactsAndSightings from '../FactsAndSightings/FactsAndSightings';
import Information from '../Information/Information';

import './InfoSheet.css'

let  InfoSheet = () => {

    return (
        <main className="infoSheet">

            <Picture />
            <FactsAndSightings />
            <Information />

        </main>
    )
}

export default InfoSheet; 