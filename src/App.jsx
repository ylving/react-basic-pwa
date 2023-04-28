import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://aksell.no" target="_blank">
          <Logo />
        </a>
      </div>
      <h1>PWA demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Antall er {count}
        </button>
        <p>
          Enkel PWA demo
        </p>
        <figure className="image-container">
          <a href="/image1.jpeg">
            <img className="image" src="/image1.jpeg" />
          </a>
        </figure>
      </div>
    </>
  )
}

export default App
