import React from 'react';
import ListItem from '../post-item-list/list-item'

import './post-list.css'


const PostList = () => {
    return (
        <ul className="app-list list-group">
            <ListItem label = "Goint to learn React"/>
            <ListItem label = "It is so good"/>
            <ListItem label = "I need a break..."/>
        </ul>
    )
}

export default PostList;