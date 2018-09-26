import React, { Component } from 'react';

import MainInput from './MainInput';

class MainSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        }
    }

    handleInputChange = (event) => {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        console.log(newState);
    }

    render() {
        return (
            <div>
                <MainInput searchTerm={this.state.searchTerm} handleChange={this.handleInputChange}/>
            </div>
            
        )
    }
}

export default MainSearch;