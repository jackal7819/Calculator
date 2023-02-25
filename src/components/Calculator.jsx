import React from 'react';
import { useState } from 'react';

const Calculator = () => {
    const [calc, setCalc] = useState('');
    const [result, setResult] = useState('');

    const ops = ['/', '*', '+', '-', '.'];
	// const idNumber = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    const updateCalc = (value) => {
        if (
            (ops.includes(value) && calc === '') ||
            (ops.includes(value) && ops.includes(calc.slice(-1)))
        ) {
            return;
        }

        setCalc(calc + value);

        if (!ops.includes(value)) {
            setResult(eval(calc + value).toString());
        }
    };

    const createDigits = () => {
        const digits = [];

        for (let i = 1; i < 10; i++) {
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>
                    {i}
                </button>
            );
        }

        return digits;
    };

    const calculate = () => {
        setCalc(eval(calc).toString());
    };

	const deleteLast = () => {
		if (calc === '') {
			return;
		}

		const value = calc.slice(0, -1);

		setCalc(value);
	}

    return (
        <div className='calculator'>
            <div id="display" className='display'>
                {result ? <span>({result})</span> : ''} &nbsp; {calc || '0'}
            </div>

            <div className='operators'>
                <button id="multiply" onClick={() => updateCalc('*')}>&#215;</button>
                <button id="divide" onClick={() => updateCalc('/')}>&#247;</button>
                <button id="add" onClick={() => updateCalc('+')}>+</button>
                <button id="subtract" onClick={() => updateCalc('-')}>&#8722;</button>

                <button id="clear" onClick={deleteLast}>Del</button>
            </div>

            <div className='digits'>
                {createDigits()}
                <button id = 'zero' onClick={() => updateCalc('0')}>0</button>
                <button id="decimal" onClick={() => updateCalc('.')}>,</button>
                <button id="equals" onClick={calculate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
