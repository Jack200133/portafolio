import { useState } from 'react'
import Porta from './Porta'
import ImageListItem from '@mui/material/ImageListItem';
import ImageList from '@mui/material/ImageList';
import mg1 from "../../assets/pico/crynchy.png"
import mg2 from "../../assets/pico/stream.png"
import mg3 from "../../assets/pico/dinner.png"
import mg4 from "../../assets/pico/memoria.png"
import mg5 from "../../assets/pico/maze.png"
import mg6 from "../../assets/pico/pochita.png"
import mg7 from "../../assets/pico/calc.png"
import mg8 from "../../assets/pico/com.png"
import TitleK from '../TitleK/TitleK'
import "./Goku.css"
const Gojan = [
    {
        img: mg1, title: "Pixel Perfect Crunchyroll",
        link: "https://crunchyroll.juanangelcarrera.xyz/",
        descrip: "The idea of this project was to be able to copy a pixel perfect page that we liked and not only that, I also copied most of the animations and hovers.",
        descrip2: "The skills I developed in this project were the server side rendering with webpack, the use of eslint and nginx to upload it to my own server.",
        git: "https://github.com/Jack200133/Crunchyroll"
    },
    {
        img: mg8, title: "Communic-aid",
        link: "https://github.com/Jack200133/DinnersReady",
        descrip: "The base of this project was the creation of a pure drawing in css so I decided to draw pochita from the famous manga series chainsaw man. ",
        descrip2: "For this project I learned a lot about the basics of css and it helped me a lot to learn about Flex, to have a better notion of the size of the divs and in general how to give a good css. ",
        git: "https://github.com/Jack200133/Pochita-CSS-Only"
    },
    {
        img: mg2, title: "Proyect Streaming",
        link: "https://streaming.juanangelcarrera.xyz/",
        descrip: "The basis of this project was to emulate a streaming application like Netflix or Youtube where you have several types of users and have ads for free users, in addition to the use of admin users.",
        descrip2: "The skills I developed in this project were to be able to create REST Apis with node.js as well as the creation of projects with the help of vite. ",
        git: "https://github.com/Jack200133/Proyecto-1-Bases-de-Datos"
    },
    {
        img: mg3, title: "Dinners-Ready",
        link: "https://github.com/Jack200133/DinnersReady",
        descrip: "Still in development, this is our idea for a recipe recommendation app to prepare a delicious meal with just the things you have at home.",
        descrip2: "The skills I developed in this project were the use of React Native for the creation of an app for mobile devices in addition to having a Node.js REST API.",
        git: "https://github.com/Jack200133/DinnersReady"
    },
    {
        img: mg4, title: "Anime Memoy",
        link: "https://crunchyroll.juanangelcarrera.xyz/",
        descrip: "The idea was to learn the basic concepts of react as the states and the handling of these in addition to using nothing more than an html file.",
        descrip2: "In this project I learned why each thing is used, how the program could be modularized by making it by components and how the states behave from parents to children.",
        git: "https://github.com/Jack200133/Memoria_React"
    },
    {
        img: mg5, title: "Helltaker Maze",
        link: "https://streaming.juanangelcarrera.xyz/",
        descrip: "The basis of this project is the creation of a mini-game which is a maze in which it had to be transpiled by webpack and had to make a request to an api to get a random maze.      ",
        descrip2: "In this project I learned how to use Webpack to transpile react and also how to use emotion to have the css inside the react components and be able to animate the player.",
        git: "https://github.com/Jack200133/Laberinto_HellTaker_React"
    },
    {
        img: mg6, title: "Pochita-CSS-Only",
        link: "https://github.com/Jack200133/DinnersReady",
        descrip: "The base of this project was the creation of a pure drawing in css so I decided to draw pochita from the famous manga series chainsaw man. ",
        descrip2: "For this project I learned a lot about the basics of css and it helped me a lot to learn about Flex, to have a better notion of the size of the divs and in general how to give a good css. ",
        git: "https://github.com/Jack200133/Pochita-CSS-Only"
    },
    {
        img: mg7, title: "Calculadora React",
        link: "https://streaming.juanangelcarrera.xyz/",
        descrip: "The basis of this project is the creation of a mini-game which is a maze in which it had to be transpiled by webpack and had to make a request to an api to get a random maze.      ",
        descrip2: "In this project I learned how to use Webpack to transpile react and also how to use emotion to have the css inside the react components and be able to animate the player.",
        git: "https://github.com/Jack200133/Laberinto_HellTaker_React"
    },

]
function Goku() {
    return (
        <div className="proyects" id="Portafolio">
            <TitleK title="My Proyects" tipo="b" />
            <div className="grider">
                {Gojan.map((items, i) => { return (<Porta key={i} {...items} />) })}
            </div>
        </div>
    )
}

export default Goku
