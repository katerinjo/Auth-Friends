import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from 'axios';
import './App.css';

import FriendForm from './components/FriendForm';
import ItemList from './components/ItemList';

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
        <Route path='/' exact component={} />
        <Route path='/list' render={() => (
          <>
            <FriendForm subFun={setPending} />
            <ItemList items={friends} failureText='you have no friends' />
          </>
        )} />
      </div>
    </Router>
  );
}

export default App;
