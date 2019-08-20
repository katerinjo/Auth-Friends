import React from "react";

import FriendForm from './FriendForm';
import ItemList from './ItemList';

export default ({ setPending, friends }) => {
  return (
    <>
      <FriendForm subFun={setPending} />
      <ItemList items={friends} failureText='you have no friends' />
    </>
  );
}