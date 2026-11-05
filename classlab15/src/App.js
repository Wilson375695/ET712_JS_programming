import './App.css';
import imgperson from './image/person.jpg';
import Navbars from './components/navbars';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const username = "user123"
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = 'contact' element = {<Contact />} />
          <Route path = 'about' element = {<About />} />
        </Routes>
      </BrowserRouter>
    </div>

    <div className="APP">
      <h1 style={{color: "darkblue", textAlign: "center"}}>Wilson Lin</h1>
      <h2>Wlcome to React JS</h2>
      <p>Embeded variable</p>
      <p>{username} user has id number {10 + 5}</p>

      <figure>
        <img src={imgperson}></img>
      </figure>
    </div>
    </>
  );
}

export default App;
