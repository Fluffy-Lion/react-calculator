import React from 'react'
import './Clear.css'

export const Clear = (props) => (
    <div 
    className="clearButton"
    onClick={props.handleClear}
    >
        {props.children}
    </div>
)

export default Clear