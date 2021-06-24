import React, {useState} from 'react';
import {Window} from './Window';
import {Buttons} from './Buttons';


type propsTypeCounter={
    maxNumber:number
    minNumber:number

}
export function Counter(props:propsTypeCounter) {
    let [count, setCount] = useState(props.minNumber)
    const increment = () => {

        if (count === props.maxNumber)
            return
        count++
        return (
            setCount(count)
        )
    }
    const reset = () => setCount(props.minNumber)
    return (
        <div className={'main'}>
          <Window count={count} maxNumber={props.maxNumber}/>
           <Buttons count={count} increment={increment} reset={reset} maxNumber={props.maxNumber} minNumber={props.minNumber}/>
        </div>


    )
}