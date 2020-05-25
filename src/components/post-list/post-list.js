import React from 'react';
import ListItem from '../post-item-list/list-item'

import './post-list.css'


const PostList = ({posts}) => {

    const elements = posts.map(item => {
        const {id, ...itemProps} = item;
        return (
            <li key = {id} className = 'list-group-item'>
                <ListItem {...itemProps} />
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;