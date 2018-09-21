import React from 'react';
import { Component } from 'react';

import { Button } from 'reactstrap';

class News extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            
            <div className="container">
                <h1>News Page!</h1>
                <Button color="success">Success!</Button>
            </div>
            
        )
    }
}

export default News;