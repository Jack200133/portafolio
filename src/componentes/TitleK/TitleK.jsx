import { useState } from 'react'
import './TitleK.css'

function TitleName({ title, tipo }) {
    const [count, setCount] = useState(0)

    return (
        <div className="title-container">

            <h2 className="textote">{title}</h2>
            <div className="cairo" id={tipo} />
        </div>
    )
}

export default TitleName
