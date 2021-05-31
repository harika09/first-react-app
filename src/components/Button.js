import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'


const STYLES = ['btn--primary', 'btn--outline']

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
    children, 
    type, 
    onclick, 
    buttonStyle,
    buttonSize
}) => {
    const checkBUttonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle 
    : STYLES[0];

    const checkBUttonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

    return(
        <Link to="/sign-up" className="btn-mobile">
            <button 
                className={`btn ${checkBUttonStyle} ${checkBUttonSize}`}
                onclick={onclick}
                type={type}
            >
            {children}
            </button>
        </Link>
    )
}