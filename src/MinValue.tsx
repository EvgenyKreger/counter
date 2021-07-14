import React, {ChangeEvent} from 'react';

type PropsMinValue = {
    minNumber: number
    onChangeMinValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export function MinValue(props: PropsMinValue) {
    return (
        <div >
            <span className={'nameMinValue'}>start value:</span>
            <input className={'minValue'} type="number" step={1} value={props.minNumber}
                                             onChange={props.onChangeMinValueHandler}/>
        </div>
    )
}