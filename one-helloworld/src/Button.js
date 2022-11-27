import React from 'react'

const Button = ({ title = "Nothing" }) => (
    <div>
        <button className="button">{title}</button>
    </div>
)

export default Button

//if i use {} return is must, if i use () return is not required