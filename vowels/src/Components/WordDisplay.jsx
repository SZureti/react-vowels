const VOWELS = "aeiou";

function isVowel(letter) {
  return VOWELS.includes(letter.toLowerCase());
}

function WordDisplay({ word }) {
  const letters = word.split("");
  const vowelCount = letters.filter(isVowel).length;

  return (
    <div className="word-display">
      <span className="word">
        {letters.map((letter, index) => (
          <span key={index} className={isVowel(letter) ? "vowel" : ""}>
            {letter}
          </span>
        ))}
      </span>
      <span className="count">
        {vowelCount} {vowelCount === 1 ? "vowel" : "vowels"}
      </span>
    </div>
  );
}

export default WordDisplay;
