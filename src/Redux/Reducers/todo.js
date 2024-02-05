
import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[],
    completed:[]
};

export const todoSlice=createSlice({
   name:'todo',
   initialState
   ,
   reducers:{
    addTodo:(state,action)=>{
        // console.log(action.payload)
        let newTodo = { id :nanoid(), title:action.payload.title,Description:action.payload.Description,
        category:action.payload.category,
    date:action.payload.date}
        
    state.todos.push(newTodo)

    },
    removeTodo:(state,action)=>{
        console.log(action.payload)
        let id = action.payload.id;
        let removeTo= state.todos.find(obj => obj.id=== id);
           const remTodo= state.todos.filter(obj=>obj.id!==id);
        state.todos=remTodo;

            if(!removeTo){
                console.log("error while finding things");
            }
            if(removeTo){
            state.completed.push(removeTo)
            }

    }

   }

})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer
