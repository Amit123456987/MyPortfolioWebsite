import './App.css';
import React, { Component }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import { NavBar } from './NavBar.js';
import {Header} from './components/Header.js';
import {TechStack} from './components/TechStack.js';
import { Projects } from './components/Projects';
import { ContactMe } from './components/ContactMe';

function App() {
  return (
    <>
      <NavBar/>
      <Header/>
      <TechStack/>
      <Projects/>
      <ContactMe/>
      {/* <Projects/> */}
    </>
  );
}

export default App;
