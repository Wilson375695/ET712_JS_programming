import { useState } from 'react';
import './App.css';

function App() {
  // list with three messages
  const messages = ["I think, therefore I am", "Ihave a dream", "The only thing we have to fear is fear itself"]

  // set an initial state for counter
  let [counter, setcounter] = useState(1)

  // Open And Close button
  const[isopen, setIsopen] = useState(false)

  return (
    <div className="App">
      <h1 className='title'>Slice by Wilson Lin</h1>
      <section className='slicewrapper'>
        <div className='numberWrapper'>
          <div className={counter === 1 ? "active":""}><p>1</p></div>
          <div className={counter === 2 ? "active":""}><p>2</p></div>
          <div className={counter === 3 ? "active":""}><p>3</p></div>
        </div>

        <p className='msg'><em style={{"color":"orangred"}}>{messages[counter-1]}</em></p>

        <div className='btngroup'>
          <button onClick={function(){counter>1 ? setcounter(counter-1): setcounter(3)}}>Previous</button>
          <button onClick={function(){counter<messages.length ? setcounter(counter+1): setcounter(1)}}>Next</button>
        </div>
      </section>

      <h1>Open and close session</h1>
      <section className='container'>
        <div className='info'>
          <b>Cat (Felis catus)</b>, commonly referred to as the domestic cat or house cat <button onClick={function(){setIsopen(!isopen)}} className='readmorebtn'>{isopen ? "Hide":"Read More"}</button>
        </div>

        <article>
          {
            isopen &&
            (
              <div className='readmore'>
                The cat (Felis catus), also called domestic cat and house cat, is a small domesticated carnivorous mammal. It is a member of Felidae, the family of mammals in the order Carnivora also colloquially referred to as cats. An obligate carnivore requiring a predominantly meat-based diet, it has retractable claws adapted to killing small prey species such as mice and rats. It has a strong, flexible body, quick reflexes, and sharp teeth, and its night vision and sense of smell are well developed. It is a social species, but a solitary hunter and a crepuscular predator. Cat communication includes meowing, purring, trilling, hissing, growling, grunting, body language, and scent marking. It can hear sounds too faint or too high in frequency for human ears, such as those made by small mammals. It secretes and perceives pheromones. Cat intelligence is evident in its ability to adapt, learn through observation, and solve problems. The domestic cat is the only domesticated species of the family Felidae.
              </div>
            )
          }
        </article>
      </section>
      
      <h1>Forms</h1>
      <form className='myform'>
        <fieldset>
          <legend>Form in ReactJS</legend>
          <div className='formgroup'>
            <label>Enter username
              <input 
                type='text'
                id='name'
                className='inputstyle'
                name='username'
                placeholder='Type the username'
              />
            </label>
          </div>
        </fieldset>
      </form>

    </div>
  );
}

export default App;
