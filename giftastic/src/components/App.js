import React from 'react';
import SearchBar from './SearchBar';
import FavoriteList from './FavoriteList';
import '../stylesheet/App.css'

const App = () => {
    return (
        <div>
            <SearchBar />
            <FavoriteList />
        </div>
    )
}

export default App