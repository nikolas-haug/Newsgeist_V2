import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import News from './components/News/News';
import Header from './components/Header/Header';

import MainSearch from './components/MainSearch/MainSearch';
import SearchResults from './components/MainSearch/SearchResults';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Navbar} />
      <Route path="/" component={Header} />
      <Route path="/" component={MainSearch} />
      <Route exact path="/home" component={Landing} />
      <Route exact path="/news" component={News} />
      <Route exact path="/news_search/:term" component={SearchResults} />
    </div>
  </Router>
)

export default App;