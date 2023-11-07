import CardFront from "./CardFront";
import CardBack from "./CardBack";
import './Card.css'

interface CardProps {
    word: string,
    sampleSentence: string,
    translation: string,
    sampleSentenceTranslation: string
}

function Card({ word, translation, sampleSentence, sampleSentenceTranslation}: CardProps) {
    return(
        <div className="card">
            <CardFront word={word} sampleSentence={sampleSentence} />
            <CardBack translation={translation} sampleSentenceTranslation={sampleSentenceTranslation} />
        </div>
    )
}

export default Card;