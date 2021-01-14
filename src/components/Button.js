import React from 'react'
import './Button.css'
const isOperator = (value) => {
    return  value === "." || value === "=" || value == null
}

const Button = (props) => {
    return(
        <div className={`buttonWrap ${isOperator(props.children) ? 
            null : "operator"}`}
            onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

export default Button