import React, { useEffect } from 'react'
import TitleK from '../TitleK/TitleK'
import { ReactComponent as Aws } from '../../assets/tec/aws-2.svg'
import { ReactComponent as Azure } from '../../assets/tec/azure-2.svg'
import { ReactComponent as C4 } from '../../assets/tec/c--4.svg'
import { ReactComponent as C } from '../../assets/tec/c.svg'
import { ReactComponent as CSS } from '../../assets/tec/css-3.svg'
import { ReactComponent as Git } from '../../assets/tec/git-icon.svg'
import { ReactComponent as Html } from '../../assets/tec/html-1.svg'
import { ReactComponent as Ngp } from '../../assets/tec/icons8-ngp.svg'
import { ReactComponent as Node } from '../../assets/tec/icons8-node-js.svg'
import { ReactComponent as Java } from '../../assets/tec/java-4.svg'
import { ReactComponent as Kot } from '../../assets/tec/icons8-kotlin.svg'
import { ReactComponent as Js } from '../../assets/tec/logo-javascript.svg'
import { ReactComponent as Ngnx } from '../../assets/tec/nginx-1.svg'
import { ReactComponent as Pm2 } from '../../assets/tec/pm2.svg'
import { ReactComponent as Post } from '../../assets/tec/postgresql.svg'
import { ReactComponent as Py } from '../../assets/tec/raspberry-pi.svg'
import { ReactComponent as Rasp } from '../../assets/tec/py.svg'
import { ReactComponent as ReactR } from '../../assets/tec/react-2.svg'
import { ReactComponent as ReactN } from '../../assets/tec/react-native-1.svg'
import { ReactComponent as Socket } from '../../assets/tec/socket-io.svg'
import { ReactComponent as Tailwind } from '../../assets/tec/tail.svg'
import { ReactComponent as Vit } from '../../assets/tec/vitejs.svg'
import { ReactComponent as Web } from '../../assets/tec/webpack.svg'
import { ReactComponent as U } from '../../assets/tec/ubuntu-4.svg'
import './Home.css'

function Home() {
    const [value, setValue] = React.useState(0)
    React.useEffect(() => {
        setValue(1 * 300)
    }, [])
    return (
        <div className="megacont">
            <div className="text-container" id="Home">
                <TitleK title="ME, myself & I" tipo="g" />
                <div>
                    <p className="textito">I am a student at UVG in the city of Guatemala,
                        I will graduate in 2025 and I found my passion in programming, video games and anime.</p>
                    <p className="textito">With the great variety of university projects
                        I have had the opportunity to work in many areas of
                        programming from the use of a raspberry pi in assembler
                        language to the creation of web pages like this one.</p>
                    <p class="textito">I am open to job opportunities from anywhere in the
                        world as another of my interests is to be able to travel a lot.</p>
                </div>
            </div>
            <div className="centrador">
                <div className="cositas">
                    <ReactR className="icono2" />
                    <Aws className="icono2" />
                    <Azure className="icono2" />
                    <Git className="icono2" />
                    <C4 className="icono2" />
                    <C className="icono2" />
                    <CSS className="icono2" />
                    <Html className="icono2" />
                    <Ngp className="icono2" />
                    <Node className="icono2" />
                    <Java className="icono2" />
                    <Kot className="icono2" />
                    <Js className="icono2" />
                    <Ngnx className="icono2" />
                    <Pm2 className="icono2" />
                    <U className="icono2" />
                    <Web className="icono2" />
                    <Vit className="icono2" />
                    <Tailwind className="icono2" />
                    <Socket className="icono2" />
                    <ReactN className="icono2" />
                    <Rasp className="icono2" />
                    <Py className="icono2" />
                    <Post className="icono2" />
                </div>
            </div>

        </div>

    )
}

export default Home
