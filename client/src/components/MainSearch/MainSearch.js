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


    // ******** TEST WITH THE NEWS PAGE -- TO DO - add results page after api call *************

    // pass the user input into the react router path after form submit
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.setState({
            searchTerm: ""
        });
        // let newSearchTerm = this.state.searchTerm;
        this.props.history.push("/news");
    }

    render() {
        return (
            <div>
                <MainInput searchTerm={this.state.searchTerm} handleChange={this.handleInputChange} handleSubmit={this.handleFormSubmit} />
            </div>
            
        )
    }
}

export default MainSearch;