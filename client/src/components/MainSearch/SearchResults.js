import React, { Component } from 'react';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.setState = {
            searchTerm = ""
        }
    }

    handleInputChange = (event) => {
        // Here we create syntax to capture any change in text to the query terms (pre-search).
        let newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
        // console.log(newState);
    }

    render() {
        return (
            <h1>Search Results</h1>
        )
    }
}

export default SearchResults;