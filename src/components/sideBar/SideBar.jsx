import React from 'react';
import './SideBar.css';

export default function SideBar(props){
    return(
        <div className="side-bar blue-grey overflowy-auto">
            <div className="m-1">
                <img src={props.logo} alt="logo"/>
            </div>
            <div className="collection border-none">
                <a href="#!" className="collection-item blue-grey border-none text-white active-item">Movies</a>
                <a href="#!" className="collection-item blue-grey border-none text-white">Alvin</a>
                <a href="#!" className="collection-item blue-grey border-none text-white">Alvin</a>
                <a href="#!" className="collection-item blue-grey border-none text-white">Alvin</a>
                <a href="#!" className="collection-item blue-grey border-none text-white">Alvin</a>
                <a href="#!" className="collection-item blue-grey border-none text-white">Alvin</a>
                <a href="#!" className="collection-item blue-grey border-none text-white">Alvin</a>
                <a href="#!" className="collection-item blue-grey border-none text-white">Alvin</a>
            </div>
        </div>
    );   
}