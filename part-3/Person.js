"use strict";

function Person({ name, age, hobbies = [] }) {
  // const tweetStyle = {
  //   border: '1px solid black',
  //   margin: '10px',
  //   padding: '5px',
  //   backgroundColor: 'blue',
  //   color: 'white',
  //   width: '50%'
  // };
  let header3Text = age > 18 ? "please go vote!" : "you must be 18";

  return <div>
    <Alert content = {header3Text}/>
    <p>Learn some information about this person <br />
      <b>name: {name.slice(8)} ({age})</b></p>
    <h4>Hobbies:</h4>
    <ul>
      {hobbies.map(hobby => <li>{hobby}</li>)}
    </ul>
  </div>;
}