import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/index';
import PostList from '../post-list/index';
import PostStatusFilter from '../post-status-filter/index'
import FormAdd from '../post-add-form/index';

import './app.css'


const App = (props) => {

    const data = [
        {label: "Goint to learn React", important : true, id : 'qwe'},
        {label: "It is so good", important : false, id : 'qwr'},
        {label: "I need a break...", important : false, id : 'qqq'}
    ]

    return (
        <div className="app">
            <AppHeader/>
            <div className='search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts = {data}/>
            <FormAdd/>
        </div>    
    )
}

export default App;