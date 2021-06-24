import React from 'react';

type propsTypeWindow={
    count:number
    maxNumber:number
}

export function Window(props:propsTypeWindow){
    return(
        <div>
            <div id={'count'} className={props.count === props.maxNumber ? 'countMax' : ''}>{props.count}</div>
        </div>
    )


}