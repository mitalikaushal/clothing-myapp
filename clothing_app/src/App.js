import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter ,Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
    <BrowserRouter>
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </BrowserRouter>

    </div>
  );
}

export default App;