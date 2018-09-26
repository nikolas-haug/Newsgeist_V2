import React, { Component } from 'react';
import API from '../../API/control';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        this.getNewsResults(this.props.match.params.term);
    }

    getNewsResults = (searchTerm) => {
        API.getNews(searchTerm).then((res) => {
            // console.log(res.data);
            this.setState({
                results: res.data.articles
            });
            console.log(this.state.results);
        }).catch((err) => { 
            console.log(err);
        });
    }

    displayNewsResults = results => results.map((item, index) => {
        return (
            <div key={index}>
                <h3>{item.source.name}</h3>
                <img className="img-fluid" src={item.urlToImage} />
                <a href={item.url}><h1>{item.title}</h1></a>
                <p>{item.description}</p>
            </div>
        )
    })

    render() {
        return (
            <div>
                <h1>Search Results</h1>
                <div>
                    {this.displayNewsResults(this.state.results)}
                </div>
            </div>
            
        )
    }
}

export default SearchResults;