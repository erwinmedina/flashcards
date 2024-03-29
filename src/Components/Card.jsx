import "./Card.css"
import { useState } from "react"

export default function Card({word}) {

    const getRandomColor = () => {
        // Generate random RGB values
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        // Return a string representing the random color in RGB format
        return `rgb(${r}, ${g}, ${b})`;
    };

    const [clicked, setClicked] = useState(0);
    function handleClick() {
        if (clicked) {
            return setClicked(0)
        }
        return setClicked(1)
    }

    return (
        <div onClick={handleClick} >
            {clicked ? 
                <div className="Card2" style={{background: getRandomColor()}}>
                    <p class="d-inline-flex gap-1 englishPhrase">
                        {word.englishPhrase} 
                    </p>
                    <div>
                        <div class="card card-body">
                            <p>Pronounciation:</p>
                            <p>{word.pronounciation}</p>
                            <br></br>
                            <p>{word.foreignPhrase}</p>
                        </div>
                    </div>
                </div>
                :
                <div className="Card">
                    <p class="d-inline-flex gap-1">
                        {word.englishPhrase}
                    </p>
                </div>
            }
        </div>
    )
}