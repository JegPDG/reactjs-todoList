import React from 'react'
import { assets } from '../assets/assets'


export default function TodoCard(props) {
  const { children, handleDeleteTodo, index, handleEditTodo } = props;
  
  return (
    <>
    <li className='todoItem'>
        {children}
      <div className="actionsContainer">
        <button onClick={()=> {
          handleEditTodo(index)
        }}>
        <img className='icon' src={assets.edit_icon} alt="" />
        </button>
        <button onClick={() => {
            handleDeleteTodo(index)
        }}>
        <img className='icon' src={assets.trash_icon} alt="" />
        </button>

      </div>       
     </li>
    </>
  )
}
