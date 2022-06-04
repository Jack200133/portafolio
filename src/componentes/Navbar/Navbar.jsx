import { useState } from 'react'

import './Navbar.css'

function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <div className="posicion">

            <div className="container">
                <a href="#Home"><span>Home</span></a>
                <a href="#Portafolio"><span>Portafolio</span></a>
                <a href="#Contact"><span>Contact Me</span></a>
            </div>
        </div>
    )
}

export default Navbar
