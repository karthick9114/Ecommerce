import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue } from '../reduces/counterSlices';

const Counter = () => {
  const count = useSelector((state)=>state.counter.count);
  const dispatch = useDispatch()
  const [value,setValue] = useState(0);
  const change = (e)=>{
    setValue(e.target.value)
  }
  // const {count,increment}=useContext(CounterContext)
    // const [count,setCount] = useState(0);
    // const changeCount = ()=>{
    //     setCount(count+1)
    // }
    // const decrement = ()=>{
    //     count>0?setCount(count-1):setCount(0)
    // }
  return (
    <div className='counterButton'>
      <p>Counter :{count} </p>  
      <button onClick={()=>{
        return dispatch(increment())}}>increment</button>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <input type="number" value={value} onChange={change}/>
      <button onClick={()=>{
        return dispatch(incrementByValue(parseInt(value)))
      }}>Submit</button>
    </div>
  )
}

export default Counter
