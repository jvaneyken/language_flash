function Card() {
    return(
        <>
            I am a Card component
            <div>Front of Card</div>
            <div>Word</div>

            <div>Back of Card</div>
            <div>Translation</div>
            <div>Did you get it right?</div>
            <label>Yes
                <input type="checkbox" />
            </label>
            <label>No
                <input type="checkbox" />
            </label>
        </>
    )
}

export default Card;