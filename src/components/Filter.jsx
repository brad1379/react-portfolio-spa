import React, { useState } from 'react';

function Filter({search, handleSearch}) {
    return(
        <div className="ui input">
            <input 
                id="search"
                type="text" 
                name="search"
                placeholder="Search Projects"
                value={search}
                onChange={handleSearch}
            />
        </div>
    )
}

export default Filter;