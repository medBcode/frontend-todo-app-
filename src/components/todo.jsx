import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { CiEdit } from "react-icons/ci";

const Todo = ({text,updateMode,deleteToDo}) => {
    return (
        <div className="todo">
            <div className="text">{text}</div>
            <div className="icons">
                <CiEdit className="icon" onClick={updateMode}/>
                <RiDeleteBinFill className="icon" onClick={deleteToDo}/>
            </div>
        </div>
    )
}

export default Todo
