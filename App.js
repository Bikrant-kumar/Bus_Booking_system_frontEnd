import React from 'react';
import {BrowserRouter,Route} from "react-router-dom";
import Home from './components/Home';
import Trip from './components/Trip';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Route exact path='/' component={Home}></Route>
         <Route exact path='/Trip' component={Trip}></Route>
      </BrowserRouter>   
    </div>
  );
}

export default App;
