import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Result = ({ value }) => {
    return (
        <div className="screen__result"> { value } </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value: '0'
}

export default Result