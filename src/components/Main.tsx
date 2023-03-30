import React from "react";
import { Component } from "react";
import dj from '../dj.jpg'
export default class Main extends Component {

    render() {
        return <div id="mainDiv">
            <p>Üdvözöllek DJ Petrik weboldalán!</p>
            <p> </p>
            <p>Válassz a fenti lehetőségek közül!</p>
            <img src={dj} alt="dj" id="dj"/>
        </div>
    }

}