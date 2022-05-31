import { useState } from 'react'
import './TitleName.css'

function TitleName() {
    const [count, setCount] = useState(0)

    return (
        <div className="title-container">
            <h2 class="content__title content__title--size-s" data-text-rep="">Juan Angel Carrera</h2>

        </div>
    )
}

export default TitleName
