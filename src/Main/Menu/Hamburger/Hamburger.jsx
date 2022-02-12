import { useState } from 'react'
import React from 'react'
import './Hamburger.css'

function Hamburger(props) {

    function isClickd() {
        props.isClicked('false')
    }
    return (
        <>
            <a id="hamburger" className="hamburger-menu " href="#" onClick={isClickd}> &#9776; </a>
        </>
    )
}

export default Hamburger