import { useState } from 'react'
import './TitleName.css'

function TitleName() {
    const [count, setCount] = useState(0)

    return (
        <div className="cosito">

            <article>
                <h1>Juan Angel Carrera</h1>
                <p>Computer Science Student / Front & Back End Developer / UX & UI designer</p>
            </article>
        </div>
    )
}

export default TitleName
