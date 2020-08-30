import React from 'react';
import logo from './logo.svg';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

// components
import NavBar from './components/navBar/NavBar';
import SideBar from './components/sideBar/SideBar';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <SideBar logo={logo} />
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
