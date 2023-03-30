import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    
    render() {
        return <nav>
            <Link to='/'>Főoldal </Link>
            <Link to='/tapasztalat'>Szakmai tapasztalat </Link>
            <Link to='/idopont'>Időpontfoglalás </Link>
        </nav>
    }

}