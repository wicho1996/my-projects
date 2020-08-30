import React from 'react';
import './NavBar.css';

export default function NavBar(){
    return(
        <div className="nav-bar">
            <nav className="nav-extended blue">
                <div className="container-nav-bar">
                    <div className="nav-wrapper">
                    <a href="/#" className="brand-logo">Logo</a>
                    <a href="/#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="sass.html">About</a></li>
                        <li><a href="badges.html">Account</a></li>
                        <li><a href="collapsible.html">Out</a></li>
                    </ul>
                    </div>
                    <div className="nav-content">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><a href="#test1">Projects</a></li>
                        <li className="tab disabled"><a href="#test2">Games</a></li>
                        <li className="tab disabled"><a href="#test3">Tecnologies</a></li>
                        <li className="tab disabled"><a href="#test4">Learn</a></li>
                    </ul>
                    </div>
                </div>
            </nav>

            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Sass</a></li>
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
            </ul>

            {/* <div id="test1" class="col s12">Test 1</div>
            <div id="test2" class="col s12">Test 2</div>
            <div id="test3" class="col s12">Test 3</div>
            <div id="test4" class="col s12">Test 4</div> */}
        </div>
    );
}