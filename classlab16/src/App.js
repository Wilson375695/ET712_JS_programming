import './App.css';
import User from './user';

import man from './images/man.png';
import woman from './images/woman.png';
import hacker from './images/hacker.png';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign: "center"}}>Wilson Lin</h1>
      <main className='container'>
        {/* user 1 */}
        <User image={man} username="Man" date="10/15/26" msg="Good Moring"/>
        {/* user 2 */}
        <User image={woman}  username="Woman" date="9/20/26" msg="Good Evening"/>
        {/* user 3 */}
        <User image={hacker} username="Hacker" date="8/20/25" msg="Good Night"/>
      </main>
    </div>
  );
}

export default App;
