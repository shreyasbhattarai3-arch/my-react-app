import { useState } from 'react'
import meImage from './assets/Me_lol.png'

function Home() {
  const [interests, setInterests] = useState([
    'Music',
    'Coding',
    'Billiards',
    'Cooking'
  ])

  const shuffle = () => {
    const shuffled = [...interests].sort(() => Math.random() - 0.5)
    setInterests(shuffled)
  }

  return (
    <div className="app">
      <div>
        <h1>Hello everyone!</h1>
        <p>My name is Shreyas. Welcome to my website!</p>
      </div>

      <div className="about-me">
        <h1>About me</h1>
        <p>I am currently a student at the University of Washington! I am studying computer science and I love music!</p>
        <img src={meImage} alt="Shreyas" width="450" height="400" />
      </div>

      <div className="interests">
        <h1>Things I'm interested in</h1>
        <ul>
          {interests.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={shuffle}>Shuffle</button>
      </div>
        <div className="keyboard-help">
    <h1>Keyboard Navigation</h1>
    <p>This site is can be used with just a keyboard</p>
    <ul>
        <li><strong>Tab</strong> — move forward through links and buttons</li>
        <li><strong>Shift + Tab</strong> — move backward</li>
        <li><strong>Enter</strong> — hit the current link or button</li>
        <li><strong>Space</strong> — also hit the current button</li>
    </ul>
    <p>
        A visible line is around whatever element is currently focused.
    </p>
    <h2>What I focused on</h2>
    <p>
        I tried to apply visability and usability principles.
    </p>
    </div>
    </div>
  )
}

export default Home