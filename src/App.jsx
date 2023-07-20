import { useState } from 'react'
import logo from './images/logo.svg'
import facebook from './images/facebook.svg'
import twitter from './images/twitter.svg'
import instagram from './images/instagram.svg'
import hero from './images/illustration-mockups.svg'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav>
        <img src={logo} className="logo huddle" alt="Huddle logo" />
      </nav>

      <main>
        <div className="imgContainer">
          <img src={hero} className="heroImg" alt="hero" />
        </div>
        <div className="textContainer">
          <h1>Build the Community Your Fans Will Love</h1>
          <p>Huddle re-images the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
          <button>Register</button>
        </div>
      </main>

      <footer>
        <a href="https://facebook.com" target="_blank">
          <img src={facebook} className="botIcon" alt="facebook" />
        </a>
        <a href="https://threads.com" target="_blank">
          <img src={twitter} className="botIcon" alt="twitter" />
        </a>
        <a href="https://instagram.com" target="_blank">
          <img src={instagram} className="botIcon" alt="instagram" />
        </a>
      </footer>

    </>
  )
}

export default App
