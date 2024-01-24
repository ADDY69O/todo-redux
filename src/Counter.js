import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './Redux/Reducers/counterReducer'

const Counter = () => {
    const dispatch = useDispatch()

    return (
    <div>
        <h1>Counter</h1>
        <div className=' flex flex-row justify-around'>

    <button className='text-4xl' onClick={() => dispatch(increment())}>+</button>
    <button className='text-4xl'     onClick={() => dispatch(decrement())}>-</button>
        </div>
    </div>
  )
}

export default Counter