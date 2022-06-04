import { useState } from 'react'
import TitleK from '../TitleK/TitleK'
import "./Contact.css"
import Button from '../Button/Button'
import twt from '../../assets/cont/twt.svg'
import insta from '../../assets/cont/insta.svg'
import gmail from '../../assets/cont/gmail.svg'

const mes = [
    {
        link: "https://twitter.com/jack_carrera",
        img: twt
    }, {
        link: "https://www.instagram.com/carrera.angel03/",
        img: insta
    }, {
        link: "juanangelcarrerasoto@gmail.com",
        img: gmail
    },
]

function Contact() {
    return (
        <div className="conta" id="Contact">
            <div className="der">

                <TitleK title="Contact Me" tipo="r" />
            </div>
            <p>If you have any project in mind do not hesitate to send me an email or message to make it happen... </p>
            <div className="lugares">
                {mes.map((items, i) => { return (<Button key={i} {...items} />) })}
            </div>
        </div>
    )
}

export default Contact
