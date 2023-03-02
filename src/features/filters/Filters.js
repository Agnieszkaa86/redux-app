import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter, selectFilters } from "./FiltersSlice";
import { statusFilters } from "../filters/StatusFilters";



export function Filters() {
    const filters = useSelector(selectFilters);
    const filter = filters.Object.status;
    const dispatch = useDispatch();
    const handleFilterChange = filter => dispatch(setStatusFilter(filter));

   
    return ( 
        <>
            <h3>Filters</h3>
            <div>
            <Button
                selected={filter === statusFilters.all}
                onClick={() => handleFilterChange(statusFilters.all)}>
                All
            </Button>
            <Button
                selected={filter === setStatusFilter.active}
                onClick={() => handleFilterChange(statusFilters.active)}>
                Active
            </Button>
            <Button
                selected={filter === setStatusFilter.completed}
                onClick={() => handleFilterChange(statusFilters.completed)}>
                Completed
            </Button>
            </div>

            
        </>
     );
}