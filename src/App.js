import axios from "axios";
import React, {useState, useEffect} from "react";
import { Route } from 'react-router-dom'

import Form from './Components/Form';
import HomePage from './Components/HomePage'
import Confirmation from './Components/Confirmation'


const App = () => {



  return (
    <div>
      <Route>
        <Confirmation />
      </Route>
      <Route>
        <Form />
      </Route>
      <Route exact path='/'>
        <HomePage />
      </Route>
    </div>
  );
};
export default App;
