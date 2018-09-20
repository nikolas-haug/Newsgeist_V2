import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './components/Landing/Landing';

const App = () => (
  <Router>
    <Route exact path="/" component={Landing} />
  </Router>
)

export default App;