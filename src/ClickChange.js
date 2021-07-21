import React, { Component } from 'react'

class ClickChange extends Component {

    constructor() {
        super();
        this.state = {
            name: '22 year old guy',
            age: 22
        }
    }

    render() {
        return (
            <>
                <h1>Stuff Going here that ill change</h1>
                {this.state.age === 21 ? "21 year old here.." : "actually he's 22"}
                <h1>His name: {this.state.name}</h1>
                <button onClick={() => { this.setState({ name: "Phillip" }) }}>Click here to change name</button>

                <h1>His age: {this.state.age}</h1>
                <button onClick={() => { this.setState({ age: 21 }) }}>Click here to change age</button>
                <button onClick={() => { this.setState({ age: 22 }) }}>Change age back</button>
            </>
        )
    }

}

export default ClickChange;