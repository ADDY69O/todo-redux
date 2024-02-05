import React from 'react'
import { useDispatch } from 'react-redux';

const CompletedTodo = (props) => {
    if(!props.item){
        return null;
    }

 

    const dateString = props.item.date.toString() ;
  return (
    <div key={props.item.date} className="m-12 pt-4 pl-4 pr-4 pb-4 border-2 border-gray-600 rounded-lg">
      <div className={`flex items-center ${props.item.category === 'general' ? 'bg-#3490dc' : props.item.category === "urgent" ? 'bg-#ff0000' : props.item.category === "work" ? "bg-#ffb400" : props.item.category === "home" ? "bg-#00cc66" : props.item.category === "learning" ? "bg-#9966cc" : "bg-#ff9900" } p-2 rounded-lg mb-4`}>
        
        <h1 className="text-white">{props.item.category}</h1>
      </div>
      <h2 className="text-xl font-bold mb-2">{props.item.title}</h2>
      <p className="text-gray-800">{props.item.Description}</p>
      <p className="text-gray-600">{dateString.slice(0,25)}</p>
    </div>
  )
}

export default CompletedTodo