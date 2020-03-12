import React from 'react';
import { Route } from 'react-router-dom'
import Cat from './containers/Cat'
import NavBar from './components/NavBar'
import MostLiked from './containers/MostLiked'
import LeastLiked from './containers/LeastLiked'
import About from './components/About'


const App = () => {
  // load navbar
  // route browser links to appropriate components
    return (
      <>
        <NavBar />
        <br/><br/><br/>
        <Route exact path="/" component={Cat} />
        <Route exact path="/top-meow" component={MostLiked} />
        <Route exact path="/not-hot-meow" component={LeastLiked} />
        <Route exact path="/about" component={About} />
      </>
    );
  }

export default App