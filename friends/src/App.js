import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from 'axios';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Landing from './components/Landing';
import SecretPage from './components/SecretPage';

function App() {
  const [friends, setFriends] = useState([]);
  const [pending, setPending] = useState(null);

  useEffect(() => {
    alert(JSON.stringify(pending))
    setFriends(pending);
    setPending(null);
  }, [pending]);

  return (
    <Router>
      <div className='App'>
        <h1>Friends List App</h1>
        <NavLink to='/list'>access friends</NavLink>
        <Route path='/' exact component={Landing} />
        <PrivateRoute
          path='/list'
          setPending={setPending}
          friends={friends}
          component={SecretPage}
        />
      </div>
    </Router>
  );
}

export default App;
