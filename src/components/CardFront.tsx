import './CardFront.css';

interface CardFrontProps {
    word: string,
    sampleSentence: string
}

function CardFront({ word, sampleSentence }: CardFrontProps) {
    return(
        <>
            <div className='card-front'>
                <div>Word: {word}</div>
                <div>{sampleSentence}</div>
            </div>
        </>
    )
}

export default CardFront;