import imgUrl from "../../assets/react.svg";
import styles from "./Header.module.css";

function HeaderComponent() {
  return (
    <div className={styles.headerComponent}>
      <img src={imgUrl} alt="React Logo" />
      <h1>ReactFlashcards</h1>
    </div>
  );
}

export default HeaderComponent;
