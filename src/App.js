import React, {useState, UseEffect} from "react";
import { Route } from 'react-router-dom'

import Form from './Components/Form';


const App = () => {
  return (
    <div>
      <Route exact path='/'>
        <Form />
      </Route>
    </div>
  );
};
export default App;
