import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setStatusFilter, selectFilters } from "../filters/FiltersSlice";
import { statusFilters } from "../filters/StatusFilters";
import { Button } from "../../features/button/Button";



export function Filters() {
    const filter = useSelector(selectFilters);
    //  const filter = filtersObject.status;
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