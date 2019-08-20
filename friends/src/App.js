import React, { useState, useEffect } from 'react';
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
    <div className='App'>
      <FriendForm subFun={setPending} />
      <ItemList items={friends} failureText='you have no friends'/>
    </div>
  );
}

export default App;
