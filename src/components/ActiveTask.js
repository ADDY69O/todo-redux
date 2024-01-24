import React from 'react';
import { MdDone } from 'react-icons/md';

const ActiveTask = (props) => {
  // Convert date to a string
  const dateString = props.item.date.toString();

  return (
    <div key={props.item.date} className="m-12 pt-4 pl-4 pr-4 pb-4 border-2 border-gray-600 rounded-lg">
      <div className={`flex items-center bg-${props.item.category} p-2 rounded-lg mb-4`}>
        <MdDone className="text-white mr-2 cursor-pointer" onClick={()=>props.handleTaskCompleted(props.item)} />
        <h1 className="text-white">{props.item.category}</h1>
      </div>
      <h2 className="text-xl font-bold mb-2">{props.item.title}</h2>
      <p className="text-gray-800">{props.item.Description}</p>
      <p className="text-gray-600">{dateString.slice(0,25)}</p>
    </div>
  );
};

export default ActiveTask;
