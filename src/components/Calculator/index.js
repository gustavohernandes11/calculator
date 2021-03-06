import React, { useState } from 'react';
import './index.css';

const { evaluate, default: math } = require('mathjs');

export default function Calculator() {
    const [currentValue, setCurrentValue] = useState(' ');
    const [lastValue, setLastValue] = useState(' ');


    const buttons = ['AC', 'Del', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '+/-', '=']

    function handleTouche(buttonPressed) {

        if (buttonPressed === '-' || buttonPressed === '+' || buttonPressed === '/' || buttonPressed === '*') {
            setCurrentValue(currentValue + " " + buttonPressed + " ")
            return
        }

        if (buttonPressed === 'AC') {
            setCurrentValue(' ')
            setLastValue(' ')
            return
        }

        if (buttonPressed === 'Del') {
            setLastValue(' ')

            try {
                if (currentValue.substring(-1) === ' ') {
                    console.log(currentValue)
                    setCurrentValue(currentValue.substring(0, (currentValue.length - 2)))
                    return
                } else {
                    setCurrentValue(currentValue.substring(0, (currentValue.length - 1)))
                    return
                }
            } catch {
                setCurrentValue(' ')
                return
            }



        }

        if (buttonPressed === '+/-') {

            return
        }

        if (buttonPressed === '%') {

            return
        }

        if (buttonPressed === '=') {
            setLastValue(currentValue + ' = ')
            setCurrentValue(evaluate(currentValue))
            return

        } else {
            setCurrentValue(currentValue + buttonPressed)
            return

        }


    }



    return (
        <>
            <main className="calculator">
                <div className="display">
                    <h2>{lastValue}</h2>
                    <h1>{currentValue}</h1>
                </div>
                <div className="keyboard">
                    {
                        buttons.map((button) => {
                            return (<div key={button} className='button' onClick={() => handleTouche(button)}>
                                <p> {button} </p>
                            </div>
                            )
                        })
                    }
                </div>

            </main>


        </>
    )
}