import {MaxValue} from './MaxValue';
import {MinValue} from './MinValue';
import {Button} from './Button';
import React, {ChangeEvent} from 'react';

type PropsSettingsWindow = {
    maxNumber: number
    minNumber: number
    onChangeMaxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeMinValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    onclickSetHandler: () => void
    count:number
}

export function SettingsWindow(props: PropsSettingsWindow) {
    return <div className={'main'} >
        <div className={'field'}>
            <MaxValue maxNumber={props.maxNumber} onChangeMaxValueHandler={props.onChangeMaxValueHandler}/>
        <MinValue minNumber={props.minNumber} onChangeMinValueHandler={props.onChangeMinValueHandler}/>
        </div>
      <div  className={'blockForButtons'}>
          <Button function={props.onclickSetHandler}
                  title={'set'} count={props.count}
                  maxNumber={props.maxNumber}
                  minNumber={props.minNumber}/>
      </div>
    </div>
}