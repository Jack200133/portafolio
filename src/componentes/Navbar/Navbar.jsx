import { useState } from 'react'

import './Navbar.css'

function Navbar() {
    const [count, setCount] = useState(0)

    return (
        <div className="posicion">

            <div className="container">
                <a href="#"><span>Home</span></a>
                <a href="#"><span>Portafolio</span></a>
                <a href="#"><span>Get in contact</span></a>
            </div>
        </div>
    )
}

export default Navbar
