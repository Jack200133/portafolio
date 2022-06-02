import React, { useState } from 'react'

const Things = ({ img }) => {
    console.log(img)
    return (
        <div className="piso" style={{ backgroundImage: `url(${img})` }} > </div >
    )
}

export default Things
