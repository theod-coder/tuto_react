import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Cliqué {count} fois
    </button>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Bienvenue dans mon appli</h1>
      <MyButton />
      <AboutPage />
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <h1>À propos</h1>
      <p>Bien le bonjour.<br />Comment ça va ?</p>
    </>
  );
}

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};



export default App
