import React from "react";
import { Component } from "react";
interface State {
    name: string,
    date: string,
    description: string,
    output: string,
}
export default class Time extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            name: '',
            date: '',
            description: '',
            output: ''
        }
    }
    handleClick = async () => {
        const { name, date, description, output } = this.state;
        if (name.trim() == '' || date.trim() == '' || description.trim() == '') {
            this.setState({ output: "Nincs kitöltve minden mező" })
        } else {
            this.setState({ output: "Köszönjük a megkeresését" })
            this.setState({
                name: '',
                date: '',
                description: '',
            })
        }
    }
    render() {
        const { name, date, description, output } = this.state;
        return <div>
            <input type="text" placeholder="Név" value={ name } onChange={e => this.setState({ name: e.currentTarget.value })} /><br />
            <input type="text" placeholder="Dátum" value={ date } onChange={e => this.setState({ date: e.currentTarget.value })} /><br />
            <textarea value={ description } onChange={e => this.setState({ description: e.currentTarget.value })}/><br />
            <button onClick={this.handleClick}>Elküld</button>
            <p>{ output }</p>
        </div>
    }
}