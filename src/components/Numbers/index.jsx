import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import './index.css'

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.']

const Numbers = ({onClickNumbers}) => (
    <section className='numbers'>
        {
            numbers.map(number =>
                <Button
                    type="btn"
                    value={`${number}`}
                    onClickButton={onClickNumbers}
                    key={number}
                />
            )
        }
    </section>
)

Numbers.propTypes = {
    onClickNumbers: PropTypes.func.isRequired
}

export default Numbers