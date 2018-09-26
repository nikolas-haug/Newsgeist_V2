import React, { Component } from 'react';
import API from '../../API/control';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        // this.setState = {
        //     searchTerm: ""
        // }
    }

    componentDidMount() {
        this.getNewsResults(this.props.match.params.term);
    }

    getNewsResults = (searchTerm) => {
        API.getNews(searchTerm).then((res) => {
            console.log(res);
        }).catch((err) => { 
            console.log(err);
        });
    }

    render() {
        return (
            <h1>Search Results</h1>
        )
    }
}

export default SearchResults;