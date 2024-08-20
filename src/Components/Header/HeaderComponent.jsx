import imgUrl from "../../assets/react.svg";
import styles from "./Header.module.css";

function HeaderComponent() {
  return (
    <section className={styles.headerComponent}>
      <article>
        <img className={styles.imgStyle} src={imgUrl} alt="React Logo" />
        <h1>React Flashcards</h1>
        <p>🧠Expand Your React Knowledge. One Flashcard at a time! 🐌</p>
      </article>
    </section>
  );
}

export default HeaderComponent;
