import CardComponent from "./Card/CardComponent";
import styles from "./Flashcards.module.css";
function FlashcardsComponent({ flashData }) {
  // const [flashcards, setFlashcards] = useState([])

  return (
    <section className={styles.flashcardsComponent}>
      <article>
        {flashData.map((flashcard, index) => (
          <CardComponent key={index} flashcard={flashcard} />
        ))}
      </article>
    </section>
  );
}

export default FlashcardsComponent;
