import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import HeaderComponent from "./Components/Header/HeaderComponent";
import FlashcardsComponent from "./Components/Flashcards/FlashcardsComponent";
import FormComponent from "./Components/Form/FormComponent";
import FooterComponent from "./Components/Footer/FooterComponent";
import CardComponent from "./Components/Flashcards/Card/CardComponent";

function App() {
  const [flashData, setFlashData] = useState([
    {
      Question: "What is JSX?",
      Answer:
        "JSX is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.",
    },
    {
      Question: "What is React?",
      Answer:
        "React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.",
    },
    {
      Question: "What are props?",
      Answer:
        "Props are inputs to a React component. They are data passed down from a parent component to a child component. Props are arguments passed into React components.",
    },
  ]);
  return (
    <>
      <HeaderComponent />
      <FormComponent setFlashData={setFlashData} />
      <FlashcardsComponent flashData={flashData} />
      <CardComponent />
      <FooterComponent />
    </>
  );
}

export default App;
