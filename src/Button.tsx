import React from 'react';

type PropsButton = {
    function: () => void
    title: string
    count:number
    maxNumber:number
    minNumber:number
}

export function Button(props: PropsButton) {
    return <div className={props.title==='inc'?'button_inc':props.title==='Reset'?'button_reset':'set'}>

        <div className={props.title==='inc' && props.count == props.maxNumber ? 'active' :props.title==='Reset' && props.count == props.minNumber ? 'active' :props.title==='Reset' && props.count == props.maxNumber ? 'active': ''} onClick={props.function}>{props.title}
    </div>
       </div>

}