import React from 'react'
import CompletedTodo from './components/CompletedTodo';
import InputTodo from './components/InputTodo';
const Home = () => {
  return (
    <div className="text-3xl font-bold text-center">
    <h1>
    TODO - APP
    </h1>
    
    <InputTodo/>
    <CompletedTodo/>





  </div>
  )
}

export default Home