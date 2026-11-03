import './App.css';
import imgperson from '.images/person.jpg'

function App() {
  const username = "user123"
  return (
    <div className="App">
      <h1>Wilson Lin</h1>
      <h2>Wlcome to React JS</h2>
      <p>Embeded variable</p>
      <p>{username} user has id number {10 + 5}</p>
      <figure>
        <img src={imgperson}></img>
      </figure>
    </div>
  );
}

export default App;
