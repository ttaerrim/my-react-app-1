import React from 'react';

function Disney({ fav }) {
  return <h3>I am {fav}</h3>
}

function App() {
  return (
    <div className="App">
      <h1>HELLO</h1>

      <Disney fav="Snow White"/>
      <Disney fav="Cinderella"/>
      <Disney fav="Aurora"/>
      <Disney fav="Ariel"/>
      <Disney fav="Belle"/>
    </div>
  );
}

export default App;
