    import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/Reducers/todo';
    import ActiveTask from './ActiveTask';
import CompletedTodo from './CompletedTodo';

    const InputTodo = () => {
    const [title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [category, setCategory] = useState('general');
    const [completed, setCompleted] = useState([])
    const [task, setTask] = useState([]);
    const todos = useSelector(state=>state.todo.todos)
    const completedtodos = useSelector(state=>state.todo.completed)
    const dispatch = useDispatch();

    // useEffect(() => {
    //     console.log("useEffect called")
    // }, [todos.length])
    


    const handleSubmit = () => {
        const currentDate = new Date();
        // setTask([...task, { title, Description, category, date: currentDate }]);
        dispatch(addTodo({title,Description,category,date:currentDate.toISOString()}))
        // setTitle('')
        // setDescription('')
        // setCategory('')
    
    };

    const handleTaskCompleted=(ipTask)=>{
        // setCompleted([...completed,ipTask])

        const newTask = task.filter((item)=>item!==ipTask);

        setTask(newTask);
    }

    return (
        <div className=' mt-10 '>
        <div className='border-2 flex flex-col justify-center text-center border-gray-400 p-8 rounded-lg shadow-lg w-max items-center mx-auto '>
            <h1 className='text-4xl mb-8 ' >Create New Task</h1>
            <div className='mb-4 items-start mr-24 '>
            <label htmlFor='Title' className='text-xl font-bold  mb-2 text-gray-800'>
                Title
            </label>
            <input
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                className='p-2 ml-4 border-2 text-sm font-normal border-gray-500 rounded-md w-40 focus:outline-none focus:border-blue-400'
                id='Title'
                placeholder='Title'
            />
            </div>
            <div className='mb-4'>
            <label htmlFor='Description' className='text-xl font-bold mb-2 text-gray-800'>
                Description
            </label>
            <input
                type='text'
                onChange={(e) => setDescription(e.target.value)}
                className='p-4 border-2 ml-4  text-sm font-normal border-gray-500 rounded-md w-80 focus:outline-none focus:border-blue-400'
                id='Description'
                placeholder='Description'
            />
            </div>
            <div className='mb-4 mr-48'>
            <label htmlFor='category' className=' text-xl  font-bold mb-2 text-gray-800'>
                Category
            </label>
            <select
                name='category'
                id='category'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className=' ml-4 p-2 border-2 text-sm font-normal border-gray-500 rounded-md focus:outline-none focus:border-blue-400'
            >
                <option value='general'>General</option>
                <option value='urgent'>Urgent</option>
                <option value='work'>Work</option>
                <option value='home'>Home</option>
                <option value='learning'>Learning</option>
                <option value='travel'>Travel</option>
            </select>
            </div>
            <button
            onClick={() => {
                handleSubmit();
            }}
            className='py-3 px-6 border-2 rounded-lg border-gray-400 bg-blue-500 text-white hover:bg-blue-800 transition-all duration-300 focus:outline-none'
            >
            Create
            </button>
        </div>

        <h1 className='text-4xl mt-8 mb-4'>Active Tasks</h1>
        <div className='flex flex-wrap'>
            {todos &&
            todos.map((item) => (
                <ActiveTask key={item.id} item={item}  />
            ))}
        </div>
        <h1 className='text-4xl mt-8 mb-4'>Completed Tasks</h1>
        <div className='flex flex-wrap'>
            {completedtodos &&
            completedtodos.map((item) => (
                <CompletedTodo key={item.date} item={item}  />
            ))}
        </div>
        </div>
    );
    };

    export default InputTodo;
