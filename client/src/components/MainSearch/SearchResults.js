import React, { Component } from 'react';
import API from '../../API/control';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            lastSearched: ""
        }
    }

    componentDidMount() {
        this.getNewsResults(this.props.match.params.term);
    }

    // check if a search has already happened before making another api call
    componentDidUpdate() {
        const searchTerm = this.props.match.params.term
        
        if (searchTerm !== this.state.lastSearched) {
            this.getNewsResults(searchTerm);
        }
    }

    getNewsResults = (searchTerm) => {
        API.getNews(searchTerm).then((res) => {
            // console.log(res.data);
            this.setState({
                results: res.data.articles,
                lastSearched: searchTerm
            });
            console.log(this.state.results);
        }).catch((err) => { 
            console.log(err);
        });
    }

    displayNewsResults = results => results.map((item, index) => {
        return (
            <div key={index} className="col-md-4">
                <h3>{item.source.name}</h3>
                <img className="img-fluid" src={item.urlToImage} onError={(e) => {e.target.src="https://via.placeholder.com/350x200"}} style={{ height: '200px' }}/>
                <a href={item.url}><h4>{item.title}</h4></a>
                <p>{item.description}</p>
            </div>
        )
    })

    // <img src={this.props.SRC} onError={(e)=>{e.target.src=DEFAULT_IMG}}/>


    render() {
        return (
            <div className="container">
                <h1>Search Results</h1>
                <div className="row">
                    {this.displayNewsResults(this.state.results)}
                </div>
            </div>
            
        )
    }
}

export default SearchResults;