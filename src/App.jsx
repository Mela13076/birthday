import { useState } from 'react';
import confetti from 'canvas-confetti';
import './App.css';
import present from './assets/present.png'
import ticket from './assets/movie-ticket.png'

function App() {
  // const [showImage, setShowImage] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const playSongAndConfetti = () => {
    confetti();

    const audio = document.getElementById('birthdaySong');
    audio.play();

    audio.onended = () => {
      setShowModal(true);
    };
  };

  return (
    <div className="App">
      <h1>Happy Birthday Bubba!</h1>
      <img src= {present} onClick={playSongAndConfetti} alt="Present" width="300px"/>
      <p>Click ME for a Suprise</p>
      <audio id="birthdaySong" src="birthdaySong.mp3"></audio>
      {/* {showImage && <img src="your-special-image.jpg" alt="Special Image" />} */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <img src={ticket} alt="Special Image" width="1000px" />
          </div>
        </div>
      )}

        <div className="note">
          <h2>Special Note for My Special Love on Your Special Day </h2>
          <p>Hello, my love, as we celebrate another year together, I'm thrilled to share my favorite day of the year with you—your birthday. It's astonishing that you're turning 23; it feels like just yesterday we were 14. Reflecting on our journey, I've cherished every moment with you. From the shy, quiet, and somber girl you once were, you've blossomed into an incredibly beautiful, intelligent, and remarkable woman. I realize I don't say this often enough, but I'm immensely proud of you. Your ability to excel at everything you do is astounding. Whether it's picking up a new skill or tackling challenges, you always master them in no time. You're truly incredible, my love, and I hope you see that in yourself as clearly as I do. Happy birthday, my dear! I hope you enjoy this little webpage I've created for your special day. I eagerly look forward to celebrating many more birthdays with you. I love you deeply.</p>
          <p>Love Yours</p>
        </div>

    </div>
  );
}

export default App;
