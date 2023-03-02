import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTask,deleteTask, selectTasks, toggleCompleted } from "./TaskSlice";


export function Tasks() {
    const tasks = useSelector(selectTasks);
    const inputRef = useRef(null);
    console.log("tasks", tasks)
    const dispatch = useDispatch();

    const handleAddTask = () => {
        const taskText = inputRef.current.value;
        dispatch(addTask({
            id: tasks.length,
            text: taskText,
            completed: false,
        }));
        inputRef.current.value = "";
    }
    return ( 
        <>
            <h1>Task Manager</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleCompleted(task.id))} />
                        {task.text}
                    <button onClick={()=>dispatch(deleteTask(task.id))}>X</button>
                    </li>
                ))}
            </ul>
        </>
     );
}