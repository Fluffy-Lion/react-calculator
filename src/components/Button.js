import React from 'react'
import './Button.css'
const isOperator = (val) => {
    return  val === "." || val === "=" || val == null
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