import React from "react";
import { Component } from "react";
import petrik from '../petrik.jpg'

export default class Experience extends Component {
    render() {
        return <div>
            <img src={petrik} alt="petrik" id="petrik"/>
            <h4>Pro-bono bulik</h4>
            <ul>
                <li>Csibeavató, 2021.08.31</li>
                <li>Karácsonyi bál, 2021.12.22</li>
                <li>Farsangi mulatság, 2022.02.20</li>
            </ul>
            <h4>Professzionális bulik</h4>
            <ul>
                <li>Tanárkarácsony, 2021.12.20</li>
                <li>Ballagás, 2022.04.30</li>
            </ul>
        </div>
    }
}