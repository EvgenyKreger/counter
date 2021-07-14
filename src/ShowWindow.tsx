import {Display} from './Display';
import {Button} from './Button';
import React from 'react';
import './App.css'

type PropsShowWindow = {
    minNumber: number
    maxNumber: number
    count: number
    onclickIncHandler: () => void
    onclickResetHandler: () => void
}

export function ShowWindow(props: PropsShowWindow) {
    return <div className={'main'}>
        <Display minNumber={props.minNumber} maxNumber={props.maxNumber} count={props.count}/>
        <div className={'blockForButtons'}>
            <Button  function={props.onclickIncHandler}
                     title={'inc'} count={props.count}
                     maxNumber={props.maxNumber}
                     minNumber={props.minNumber} />
            <Button function={props.onclickResetHandler}
                    title={'Reset'} count={props.count}
                    maxNumber={props.maxNumber}
                    minNumber={props.minNumber}/>
        </div>
    </div>
}