import React from "react";

export default ({ items, failureText='no items' }) => {
  if (items) {
    return (
      <div className="itemlist">
        {items.map(item => (
          <ul>
            {Object.keys(item).map(key => {
              return <li>{`${key}: ${item[key]}`}</li>;
            })}
          </ul>
        ))}
      </div>
    );
  } else {
    return <div className="itemlist"><h2>{failureText}</h2></div>;
  }

}