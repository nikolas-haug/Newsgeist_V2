import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import News from './components/News/News';
import Header from './components/Header/Header';

import MainSearch from './components/MainSearch/MainSearch';
import SearchResults from './components/MainSearch/SearchResults';

// TEST ARCHIVE PAGE WITH AUTH
import AuthInput from './components/Navbar/AuthInput';
import Archive from './components/Archive/Archive';

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Navbar} />
      <Route path="/" component={Header} />

      {/* TEST FOR AUTH INPUT FIELDS */}
      <Route path="/" component={AuthInput} />

      <Route path="/" component={MainSearch} />
      <Route exact path="/home" component={Landing} />
      <Route exact path="/news_search/:term" component={SearchResults} />
      {/* TEST BELOW HERE */}
      <Route exact path="/archive" component={Archive} />
      <Route exact path="/news" component={News} />
      
    </div>
  </Router>
)

export default App;