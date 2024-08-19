import CardComponent from "./Card/CardComponent";
function FlashcardsComponent({ flashData }) {
  // const [flashcards, setFlashcards] = useState([])

  return (
    <>
      <h1>
        {flashData.map((flashEach, index) => (
          <CardComponent
            key={index}
            {...flashEach.Question}
            {...flashEach.Answer}
          />
        ))}
        {/* {Question}: {Answer} */}
      </h1>
      <CardComponent />
    </>
  );
}

export default FlashcardsComponent;
