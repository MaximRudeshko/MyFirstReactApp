import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/index';
import PostList from '../post-list/index';
import PostStatusFilter from '../post-status-filter/index'
import FormAdd from '../post-add-form/index';

import './app.css'


const App = () => {
    return (
        <div className="app">
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <FormAdd/>
        </div>    
    )
}

export default App;