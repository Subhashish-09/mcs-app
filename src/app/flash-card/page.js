import FlashCard from "./components/flash-card-panel";

const flashCards = {
  2: [
    {
      FlashCardFront: "What is the capital of France?",
      FlashCardBack: "Paris",
    },
    {
      FlashCardFront: "Who wrote 'Romeo and Juliet'?",
      FlashCardBack: "William Shakespeare",
    },
    {
      FlashCardFront: "What is the atomic number of oxygen?",
      FlashCardBack: "8",
    },
    {
      FlashCardFront: "In which year did World War II end?",
      FlashCardBack: "1945",
    },
    {
      FlashCardFront: "What is the largest planet in our solar system?",
      FlashCardBack: "Jupiter",
    },
    {
      FlashCardFront: "Who painted the Mona Lisa?",
      FlashCardBack: "Leonardo da Vinci",
    },
    {
      FlashCardFront: "What is the formula for the area of a circle?",
      FlashCardBack: "πr²",
    },
    {
      FlashCardFront: "Who is the author of 'To Kill a Mockingbird'?",
      FlashCardBack: "Harper Lee",
    },
    {
      FlashCardFront: "What is the capital of Japan?",
      FlashCardBack: "Tokyo",
    },
    {
      FlashCardFront: "What is the speed of light in a vacuum?",
      FlashCardBack: "299,792 kilometers per second",
    },
  ],

  3: [
    {
      FlashCardFront: "Who discovered penicillin?",
      FlashCardBack: "Alexander Fleming",
    },
    {
      FlashCardFront: "What is the currency of China?",
      FlashCardBack: "Chinese Yuan",
    },
    {
      FlashCardFront: "What is the boiling point of water in Celsius?",
      FlashCardBack: "100 degrees",
    },
    { FlashCardFront: "Who wrote '1984'?", FlashCardBack: "George Orwell" },
    { FlashCardFront: "What is the square root of 64?", FlashCardBack: "8" },
    {
      FlashCardFront: "What is the largest ocean on Earth?",
      FlashCardBack: "Pacific Ocean",
    },
    {
      FlashCardFront: "Who developed the theory of relativity?",
      FlashCardBack: "Albert Einstein",
    },
    {
      FlashCardFront: "What is the capital of Brazil?",
      FlashCardBack: "Brasília",
    },
    {
      FlashCardFront: "What is the chemical symbol for gold?",
      FlashCardBack: "Au",
    },
    {
      FlashCardFront: "Who is known as the 'Father of Computer Science'?",
      FlashCardBack: "Alan Turing",
    },
    {
      FlashCardFront: "What is the tallest mountain in the world?",
      FlashCardBack: "Mount Everest",
    },
  ],
  4: [
    {
      FlashCardFront: "Who painted 'Starry Night'?",
      FlashCardBack: "Vincent van Gogh",
    },
    {
      FlashCardFront: "What is the capital of Australia?",
      FlashCardBack: "Canberra",
    },
    {
      FlashCardFront: "What is the formula for Newton's second law?",
      FlashCardBack: "F = ma",
    },
    {
      FlashCardFront: "Who invented the telephone?",
      FlashCardBack: "Alexander Graham Bell",
    },
    {
      FlashCardFront: "What is the chemical symbol for water?",
      FlashCardBack: "H₂O",
    },
    {
      FlashCardFront: "Who wrote 'Pride and Prejudice'?",
      FlashCardBack: "Jane Austen",
    },
    {
      FlashCardFront: "What is the population of India?",
      FlashCardBack: "Approximately 1.3 billion",
    },
    {
      FlashCardFront: "What is the capital of Russia?",
      FlashCardBack: "Moscow",
    },
    {
      FlashCardFront: "Who discovered the law of gravity?",
      FlashCardBack: "Isaac Newton",
    },
    {
      FlashCardFront: "What is the largest desert in the world?",
      FlashCardBack: "Antarctica",
    },
  ],
  5: [
    {
      FlashCardFront: "Who is the founder of Microsoft?",
      FlashCardBack: "Bill Gates",
    },
    {
      FlashCardFront: "What is the chemical symbol for oxygen?",
      FlashCardBack: "O₂",
    },
    {
      FlashCardFront: "Who is the author of 'The Great Gatsby'?",
      FlashCardBack: "F. Scott Fitzgerald",
    },
    {
      FlashCardFront: "What is the square root of 144?",
      FlashCardBack: "12",
    },
    {
      FlashCardFront: "What is the capital of China?",
      FlashCardBack: "Beijing",
    },
    {
      FlashCardFront: "Who discovered electricity?",
      FlashCardBack: "Benjamin Franklin",
    },
    {
      FlashCardFront: "What is the currency of the United Kingdom?",
      FlashCardBack: "British Pound",
    },
    {
      FlashCardFront: "What is the melting point of ice in Celsius?",
      FlashCardBack: "0 degrees",
    },
    {
      FlashCardFront: "Who wrote 'Hamlet'?",
      FlashCardBack: "William Shakespeare",
    },
    {
      FlashCardFront: "What is the formula for the volume of a sphere?",
      FlashCardBack: "(4/3)πr³",
    },
  ],
  6: [
    {
      FlashCardFront: "Who wrote 'The Canterbury Tales'?",
      FlashCardBack: "Geoffrey Chaucer",
    },
    {
      FlashCardFront: "What is the formula for the area of a rectangle?",
      FlashCardBack: "length × width",
    },
    {
      FlashCardFront:
        "Who is the current Prime Minister of the United Kingdom?",
      FlashCardBack: "Boris Johnson",
    },
    {
      FlashCardFront: "What is the capital of China?",
      FlashCardBack: "Beijing",
    },
    {
      FlashCardFront: "What is the chemical symbol for water?",
      FlashCardBack: "H₂O",
    },
    {
      FlashCardFront: "Who discovered gravity?",
      FlashCardBack: "Isaac Newton",
    },
    {
      FlashCardFront: "What is the currency of Brazil?",
      FlashCardBack: "Brazilian Real",
    },
    {
      FlashCardFront: "What is the boiling point of water in Fahrenheit?",
      FlashCardBack: "212 degrees",
    },
    {
      FlashCardFront: "Who wrote 'The Grapes of Wrath'?",
      FlashCardBack: "John Steinbeck",
    },
    { FlashCardFront: "What is the square root of 64?", FlashCardBack: "8" },
    {
      FlashCardFront: "What is the largest ocean on Earth?",
      FlashCardBack: "Pacific Ocean",
    },
    {
      FlashCardFront: "Who discovered penicillin?",
      FlashCardBack: "Alexander Fleming",
    },
    {
      FlashCardFront: "What is the chemical symbol for oxygen?",
      FlashCardBack: "O₂",
    },
  ],
};

const FlashCardPage = ({ searchParams: { ci } }) => {
  return <FlashCard ci={ci} FlashCards={flashCards} />;
};

export default FlashCardPage;
