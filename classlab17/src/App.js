import './App.css';

function App() {
  // list with three messages
  const messages = ["I think, therefore I am", "Ihave a dream", "The only thing we have to fear is fear itself"]

  // set an initial state for counter
  let [counter, setcounter] = useState(1)

  return (
    <div className="App">
      <h1 className='title'>Slice by Wilson Lin</h1>
      <section className='slicewrapper'>
        <div className='numberWrapper'>
          <div className={counter == 1 ? "active":""}><p>1</p></div>
          <div className={counter == 2 ? "active":""}><p>2</p></div>
          <div className={counter == 3 ? "active":""}><p>3</p></div>
        </div>

        <p className='msg'><em style={{"color":"orangred"}}>{messages[counter-1]}</em></p>

        <div className='btngroup'>
          <button onClick={function(){counter>1 ? setcounter(counter-1): setcounter(3)}}>Previous</button>
          <button onClick={function(){counter<messages.length ? setcounter(counter+1): setcounter(1)}}>Next</button>
        </div>
      </section>
    </div>
  );
}

export default App;
