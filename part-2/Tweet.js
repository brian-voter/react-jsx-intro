"use strict";

function Tweet({ username, name, date="Today", message }) {
  const tweetStyle = {
    border: '1px solid black',
    margin: '10px',
    padding: '5px',
    backgroundColor: 'blue',
    color: 'white',
    width: '50%'
  }

  return <div style={tweetStyle}>
    <h3>{name} - <b>({username})</b></h3>
    <p>{message}</p>
    <i>timestamp: {date}</i>
  </div>;
}