import React from 'react';
import './Content.css';

// components
import Principal from '../movies/modules/principal/components/Principal';

export default function Content(){
    return(
        <div className="container">
            <div className="content">
                <Principal />
            </div>
        </div>
    );
}