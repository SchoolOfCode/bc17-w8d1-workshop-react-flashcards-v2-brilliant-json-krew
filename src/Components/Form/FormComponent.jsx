import styles from "./Form.module.css";
function FormComponent( { setFlashData, flashData } ) {
  
  const extraQuestion = { 
    Question: "What is HTML?",
    Answer: "HTML is ....",
  }
  {/* Update the state by pushing extraQuestion into flashData array
  // create a new array and update the state with that new array.
  // This spreads the existing items in the flashData array into a new array and adds the new item to the //end of the new array.
  */}
  

  function handleClick() {
    if (!setFlashData) {
      return;
    }
    setFlashData([...flashData, extraQuestion]);

    
    // setFlashData((previousData) => {
    //   [...previousData, extraQuestion]
    // })
  }
  
  return (
    <section className={styles.formComponent}>
      <article>
        <h1>Form</h1>
        <button onClick={handleClick}>Click</button>
        <p>{setFlashData}</p>
      </article>
    </section>
  );
}

export default FormComponent;
