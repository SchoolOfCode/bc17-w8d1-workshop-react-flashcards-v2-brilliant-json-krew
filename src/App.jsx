import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderComponent from "./Components/Header/HeaderComponent"
import FlashcardsComponent from "./Components/Flashcards/FlashcardsComponent"
import FormComponent from "./Components/Form/FormComponent"
import FooterComponent from "./Components/Footer/FooterComponent"
import CardComponent from "./Components/Flashcards/Card/CardComponent"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <FormComponent />
      <FlashcardsComponent />
      <CardComponent />
      <FooterComponent />
    </>
  )
}

export default App
