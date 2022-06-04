import { useState } from 'react'

import './Buttons.css'

function Button({ link, img }) {
    console.log(img)
    const imgs = {
        width: 50,
        height: 50,
        backgroundImage: `url(${img})`,
        border: '2px solid #red',
        boxShadow: 24,
        backgroundSize: "contain",
        backgroundRepeat: 'no-repeat',
        objectFit: "contain",
        zIndex: '10'
    };
    if (link === "juanangelcarrerasoto@gmail.com") {
        return (
            <a href="mailto:juanangelcarrerasoto@gmail.com">

                <div className="box">
                    <div style={imgs} Name="image" />

                </div >
            </a >
        )
    }
    return (
        <a href={link} target="_blank">

            <div className="box">
                <div style={imgs} Name="image" />

            </div >
        </a >
    )
}

export default Button
