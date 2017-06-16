import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import Book from './components/book/BookPage';
import App from './components/App';
// import BookDetailsPage from './components/book/bookDetailsPage';
import AnimalPage from './components/animal/AnimalPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
    <Route path="/books" component={Book} />
    {/*<Route path="/books/:id" component={BookDetailsPage} />*/}

    <Route path="/animals" component={AnimalPage} />
  </Route>
);
