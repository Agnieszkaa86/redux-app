import React from "react";
import { Filters } from "./features/filters/Filters";
import {Tasks } from "./features/task/Tasks";
import "./App.css";

function App() {
    return ( 
        <>
            <h1>Redux toolkit App</h1>
            <Filters />
            <Tasks />
        </>
     );
}

export default App;