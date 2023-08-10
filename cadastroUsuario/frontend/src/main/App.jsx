import './App.css'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css' // serve para pegar icones
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Logo from '../components/templates/Logo'
import Nav from '../components/templates/nav'
import Home from '../components/home/home'
import Footer from '../components/templates/footer'

export default props =>
    <BrowserRouter>
    <div className="app">
        <Logo/>
        <Nav/>
        <Routes/>
        <Footer/>
    </div>
    </BrowserRouter>
