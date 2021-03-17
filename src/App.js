import React from 'react';
import {BrowserRouter , Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Content from './components/Content'
import Sucess from './components/Sucess';

function App() {

  return (
    <BrowserRouter>
      <div className="app">
      <Route  exact path="/"  component={Content} />
      <Route  exact path="/Sucess"  component={Sucess} />

      </div>
    </BrowserRouter>
    
  );
}

export default App;
