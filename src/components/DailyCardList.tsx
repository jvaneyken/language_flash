import Card from "./Card"
// import CardFront from "./CardFront";
// import CardBack from "./CardBack";
import { useState, useEffect } from "react";

interface Word {
  word: string;
  translation: string;
  sampleSentence: string;
  sampleSentenceTranslation: string;
}

function DailyCardList() {
  const [words, setWords] = useState([]);

  const fetchWords = async () => {
    try {
      const response = await fetch("../../words.json");
      const data = await response.json();
      setWords(data.words);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchWords();
  }, []);

  return (
    <>
        {/* <Card /> */}
        {/* TODO: implement Context to pass props to CardFront and CardBack components */}
      {words.map((wordObject: Word) => {
        return <Card key={wordObject.word} word={wordObject.word} sampleSentence={wordObject.sampleSentence} translation={wordObject.translation} sampleSentenceTranslation={wordObject.sampleSentenceTranslation} />;
      })}
      {/* {words.map((wordObject: Word) => {
        return (
          <CardBack
            key={wordObject.word}
            translation={wordObject.translation}
            sampleSentenceTranslation={wordObject.sampleSentenceTranslation}
          />
        );
      })} */}
    </>
  );
}

export default DailyCardList;


// return (
//     <>
//         <Card />
//       {words.map((wordObject: Word) => {
//         return <CardFront key={wordObject.word} word={wordObject.word} sampleSentence={wordObject.sample_sentence} />;
//       })}
//       {words.map((wordObject: Word) => {
//         return (
//           <CardBack
//             key={wordObject.word}
//             translation={wordObject.translation}
//             sampleSentenceTranslation={wordObject.sampleSentenceTranslation}
//           />
//         );
//       })}
//     </>
//   );