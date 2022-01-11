import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Button = ({ type, value, onClickButton }) => (
    <button
        className={type}
        onClick={() => onClickButton(value)}
    >
        { value }
    </button>
)

Button.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
}

export default Button
