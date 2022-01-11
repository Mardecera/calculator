/* eslint no-eval: 0 */
import React, { useState } from 'react'
import Result from './components/Result'
import Numbers from './components/Numbers'
import Operators from './components/Operators'
import Functions from './components/Functions'
import './App.css'

const operators = ['+', '-', '*', '/']
const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const App = () => {
    const [state, setState] = useState('0')

    const onNumbers = (value) => {
        const screenCalc = state.split('')
        const includeNumber = screenCalc.some(item => numbers.includes(item))
        const includePN = ['+', '-'].includes(state)

        if (includeNumber)
            state === '0'
                ? setState(value)
                : setState(state + value)
        else if (includePN) setState(state + value)
        else
            value === '.'
                ? setState('0.')
                : setState(value)
    }
    
    const onOperators = (value) => {
        const lastPosition = state.length - 1
        const lastItem = state[state.length - 1]
        const includeNumber = state.split('').some(item => numbers.includes(item))

        if (includeNumber) {
            if (operators.includes(lastItem))
                setState(state.slice(0, lastPosition) + value)
            else if(state === '0' && (value === '+' || value === '-')) setState(value)
            else setState(state + value)
        } else setState('0' + value)
    }

    const onEqual = () => {
        try {
            const result = eval(state)
            setState(`${result}`)
        } catch (error) {
            setState('Error')
        }
    }

    const onClear = () => setState('0')

    const onDelete = () =>
        state.length === 1
            ? setState('0')
            : setState(state.slice(0, state.length - 1))

    return (
        <div className='calculator'>
            <Result value={state} />
            <div className="controls">
                <section className="left">
                    <Numbers onClickNumbers={onNumbers}/>
                    <Functions
                        onClickClear={onClear}
                        onClickDelete={onDelete}
                    />
                </section>
                <Operators
                    onClickOperator={onOperators}
                    onClickEqual={onEqual}
                />
            </div>
        </div>
    )
}

export default App
