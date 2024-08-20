function CardComponent({ flashcard }) {
  if (!flashcard) return null;
  return (
    <>
      <h1>{flashcard.Question}:</h1>
      <p>{flashcard.Answer}</p>
    </>
  );
}

export default CardComponent;
