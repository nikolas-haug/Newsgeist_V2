import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div>
      <Jumbotron fluid className="py-2">
        <Container fluid>
          <h1 className="display-3 text-center">Newsgeist</h1>
          <p className="lead text-center">the news aggregator for discerning readers.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;