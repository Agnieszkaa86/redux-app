import { selectFilters } from "features/filters/FiltersSlice";
// import { statusFilter } from "features/filters/StatusFilters";
import React, { useRef, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import {addTask,deleteTask, selectTasks, toggleCompleted, fetchTasks } from "./TaskSlice";


export function Tasks() {
    const tasks = useSelector(selectTasks);
    const filters = useSelector(selectFilters);
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    // console.log("tasks", tasks)

    useEffect(() => {
        dispatch(fetchTasks());
    },[dispatch]);

    const handleAddTask = () => {
        const taskText = inputRef.current.value;
        dispatch(addTask({
            id: tasks.length,
            text: taskText,
            completed: false,
        }));
        inputRef.current.value = "";
    }
    const getVisibleTasks = (tasks, statusFilter) => {
        switch (statusFilter) {
            case "active":
                return tasks.filter((task) => !task.completed);
            case "completed":
                return tasks.filter((task) => task.completed);
            default:
                return tasks;
            
        }
    };
    
    const statusFilter = filters.status;

    const visibleTasks = getVisibleTasks(tasks.items.statusFilter)
    return (
        <>
            <h1>Task Manager</h1>
            <input type="text" ref={inputRef} />
            <button onClick={handleAddTask}>Add Task</button>
            {tasks.isLoading && <p>Loading....</p>}
            {tasks.error && <p>{tasks.error}</p>}
            {visibleTasks.length === 0 && !tasks.isLoading && <p>No tasks to show</p>}
            <ul>
                {visibleTasks.map((task) => (
                    <li key={task.id}>
                        <input type="checkbox"
                            checked={task.completed}
                            onChange={() => dispatch(toggleCompleted(task.id))} />
                        {task.text}
                        <button onClick={() => dispatch(deleteTask(task.id))}>X</button>
                    </li>
                ))}
            </ul>
        </>
    );
}