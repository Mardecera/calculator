import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './index.css'

const Functions = ({onClickClear, onClickDelete}) => (
    <section className='functions'>
        <Button type="btn" value="Clear" onClickButton={onClickClear}/>
        <Button type="btn" value="🡰" onClickButton={onClickDelete}/>
    </section>
) 

Functions.propTypes = {
    onClickClear: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
}

export default Functions