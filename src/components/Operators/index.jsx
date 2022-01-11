import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './index.css'

const Operators = ({ onClickOperator, onClickEqual }) => (
    <section className='operators'>
        <Button type="btn" value="-" onClickButton={onClickOperator}/>
        <Button type="btn" value="+" onClickButton={onClickOperator}/>
        <Button type="btn" value="*" onClickButton={onClickOperator}/>
        <Button type="btn" value="/" onClickButton={onClickOperator}/>
        <Button type="btn" value="=" onClickButton={onClickEqual}/>
    </section>
)

Operators.propTypes = {
    onClickOperator: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default Operators