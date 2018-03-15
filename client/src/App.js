import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'; 
import Home from './components/Home'; 
import FetchPosts from './components/FetchPosts';
import NoMatch from './components/NoMatch'; 
import Posts from './components/Posts';
import PostView from './components/PostView';

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
   <Route exact path="/posts" component={Posts} />
    <Route exact path="/posts/:id" component={PostView} />
    <Route component={NoMatch} />
  </Switch>
)

export default App;
