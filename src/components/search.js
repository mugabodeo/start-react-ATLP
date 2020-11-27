import React, { useState } from 'react';
import '../index.css'

const SearchBar = () => {
    const [searchQuery, setQuery] = useState('');
    return (
        <div className="search">
            <form>
                <label>
                    Search:
                    </label>
                <input type='text' onChange={e => setQuery(e.target.value)} />
            </form>
        </div>
    );
}

export default SearchBar;