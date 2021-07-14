import React, {ChangeEvent} from 'react';

type PropsMaxValue = {
    maxNumber: number
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
}

export function MaxValue(props: PropsMaxValue) {
    return (
        <div className={'blockMaxValue'}>
            <span className={'nameValue'}>max value:</span>
            <input className={'maxValue'} type="number"   step={1} value={props.maxNumber}
                                           onChange={props.onChangeMaxValueHandler}/>
        </div>
    )
}