import React from 'react';
import './App.css'
import {Counter} from './Counter';

function App(){
    return(
        <div className={'wrapper'}>
            <Counter maxNumber={5} minNumber={0} />

        </div>
    )
}
export default App;
