import { useState } from "react";
import "./App.css";
import WordDisplay from "./Components/WordDisplay";
import WordForm from "./Components/WordForm";
import WordList from "./Components/WordList";

/* function App() {
  const [input, setInput] = useState("");

  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input) {
      setSubmitted(input.trim());
      setInput("");
    }
  };

  return (
    <main className="app">
      <h1>Vowel Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter A Word"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {submitted && <p className="word">{submitted}</p>}
    </main>
  );
}
*/

function App() {
  const [words, setWords] = useState([]);

  function addWord(newWord) {
    setWords([...words, newWord]);
  }

  const latestWord = words[words.length - 1];

  return (
    <main className="app">
      <section className="hero">
        <h1>Vowel Finder</h1>
      </section>
      <WordForm onAddWord={addWord} />

      {latestWord && <WordDisplay word={latestWord} />}

      <WordList words={words} />
    </main>
  );
}

export default App;
