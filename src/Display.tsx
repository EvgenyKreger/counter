import React from 'react';
import './Display.css';

type PropsDisplay = {
    minNumber: number
    maxNumber: number
    count: number
}

export function Display(props: PropsDisplay) {
    return (
        <div className={'count'}>
        <span className={'test'}>
            <span className={props.minNumber >= props.maxNumber? 'incorrect' :props.minNumber < 0 ? 'incorrect' :props.maxNumber == props.count?'incorrect':'correct'}>{!props.count ?('enter values and press \'set\'') : props.minNumber >= props.maxNumber || props.minNumber < 0 ? ('Incorrect value') : props.count}</span>
            </span>
        </div>

    )
}