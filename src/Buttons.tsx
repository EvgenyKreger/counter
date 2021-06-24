import React from 'react';

type propsTypeButtons={
    count:number
    reset:()=>void
    increment:()=>void
    maxNumber:number
    minNumber:number
}
export function Buttons(props:propsTypeButtons){
    return(
        <div className={'buttons'}>
            <div>
                <button id={'button_inc'} className={props.count === props.maxNumber ? 'active' : ''} onClick={props.increment}>inc</button>
                <button id={'button_reset'} className={props.count === props.minNumber ? 'active' : ''} onClick={props.reset}>reset</button>
            </div>
        </div>
    )
}