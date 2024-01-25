import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Reducers/counterReducer'
import todoReducer from './Reducers/todo'
export default configureStore({
  reducer: {
    counter: counterReducer,
    todo:todoReducer
  }
})