import WordDisplay from "./WordDisplay";

function WordList({ words }) {
  if (words.length === 0) {
    return <p>No words yet. Enter one above!</p>;
  }

  return (
    <section>
      <h2>Word History</h2>
      <ul className="word-list">
        {" "}
        {words.map((word, index) => (
          <li key={index}>
            <WordDisplay word={word} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WordList;
