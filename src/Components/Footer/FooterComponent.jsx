import imgUrl from "../../assets/react.svg";
import styles from "./Footer.module.css";
function FooterComponent() {
  return (
    <section className={styles.footerComponent}>
      <article>
        <h1>Built with React</h1>
        <img src={imgUrl} alt="React Logo" />
      </article>
    </section>
  );
}

export default FooterComponent;
