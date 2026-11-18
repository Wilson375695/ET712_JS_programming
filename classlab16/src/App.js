import React, { useState } from 'react';
import './App.css';
import User from './user.js';
import UserFeedback from './User_feedback.js';

// import all images
import man from './images/man.png';
import woman from './images/woman.png';
import hacker from './images/hacker.png';

function App() {
  const [comments, setComments] = useState([]);

  const addComment = (feedback) => {
    setComments((currentComments) => [...currentComments, feedback]);
  };

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>Wilson Lin</h1>
      <main className='container'>
        {/* user 1 */}
        <UserFeedback username="Man" onPost={addComment}>
          <User image={man}  date="10/15/26" msg="Good Moring"/>
        </UserFeedback>
        {/* user 2 */}
        <UserFeedback username="Woman" onPost={addComment}>
          <User image={woman}   date="9/20/26" msg="Good Evening"/>
        </UserFeedback>
        {/* user 3 */}
        <UserFeedback username="Hacker" onPost={addComment}>
          <User image={hacker}  date="8/20/25" msg="Good Night"/>
        </UserFeedback>
      </main>
      {/* POST COMMENTS */}
      <section className='postcomment'>
        <ul className='commentlist'>
          {comments.map((feedback, index) => (
            <li key={index}>
              <i><b>{feedback.username}</b></i> -- {feedback.comment} Posted in {feedback.postedate}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
