import Card from "../Components/Card";
import "./Home.css"
import { words } from "../words.js"

export default function Home() {

    console.log(words)

    return (
        <div className="Home">
            {words.map(word => (
                <Card word={word} />
            ))}
        </div>
    )
}