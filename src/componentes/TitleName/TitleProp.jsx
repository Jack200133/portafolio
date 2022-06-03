import { useState } from 'react'
import './TitleName.css'

function TitleName({ title, text }) {
    const [count, setCount] = useState(0)

    return (
        <div className="cosito">

            <article>
                <h2>{title}</h2>
                <p>{text}</p>
            </article>
        </div>
    )
}

export default TitleName
