import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css'

import {SettingsWindow} from './SettingsWindow';
import {ShowWindow} from './ShowWindow';


export function Counter() {
    let [minNumber, setMinNumber] = useState()
    let [maxNumber, setMaxNumber] = useState()
    let [count, setCount] = useState()


    useEffect(()=>{
      let data= localStorage.getItem('startValue')
        if(data){
                setMinNumber(data)
            }
    },[]);

    useEffect(()=>{
        localStorage.setItem('startValue',minNumber)

    },);

  useEffect(()=>{
      let dataMax=localStorage.getItem('valueMax')
      if(dataMax){
          setMaxNumber(dataMax)
      }
  },[])
    useEffect(()=>{
        localStorage.setItem('valueMax',maxNumber)
    })



    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxNumber(e.currentTarget.value)
    }
    const onChangeMinValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMinNumber(e.currentTarget.value)
    }

    const onclickIncHandler = () => {
        if (maxNumber ==count)
            return
        count++
        setCount(count)
    }
    const onclickSetHandler = () => {

        setCount(minNumber)

    }
    const onclickResetHandler = () => {
        setCount(minNumber)
    }
    return <div className={'wrapper'}>
      <SettingsWindow maxNumber={maxNumber}
                      minNumber={minNumber}
                      onChangeMaxValueHandler={onChangeMaxValueHandler}
                      onChangeMinValueHandler={onChangeMinValueHandler}
                      onclickSetHandler={onclickSetHandler}
                      count={count}/>
       <ShowWindow minNumber={minNumber}
                   maxNumber={maxNumber}
                   count={count}
                   onclickIncHandler={onclickIncHandler}
                   onclickResetHandler={onclickResetHandler}/>
    </div>
}
