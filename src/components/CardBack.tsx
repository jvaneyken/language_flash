import './CardBack.css'

interface CardBackProps {
    translation: string,
    sampleSentenceTranslation: string
}

function CardBack({ translation, sampleSentenceTranslation }: CardBackProps) {
    return(
        <>
            <div className='card-back'>
                <div>{translation}</div>
                <div>{sampleSentenceTranslation}</div>
                <div>Did you get it right?</div>
                <label>Yes
                    <input type="checkbox" />
                </label>
                <label>No
                    <input type="checkbox" />
                </label>
            </div>
        </>
    )
}

export default CardBack;