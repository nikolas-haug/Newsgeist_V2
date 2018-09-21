import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import News from './components/News/News';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Navbar} />
      <Route exact path="/home" component={Landing} />
      <Route exact path="/news" component={News} />
    </div>
  </Router>
)

export default App;