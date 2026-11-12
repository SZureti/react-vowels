import { useState } from "react";

function WordForm({ onAddWord }) {
  const [input, setInput] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = input.trim();
    if (trimmed === "") return;
    onAddWord(trimmed);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a word"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default WordForm;
