import React from 'react';
import ListItem from '../post-item-list/list-item'

import { ListGroup } from 'reactstrap';
import './post-list.css'

const PostList = ({posts, onDelete}) => {

    // eslint-disable-next-line array-callback-return
    const elements = posts.map((item) => {
       if(typeof item === 'object' && isEmpty(item)){
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className = 'list-group-item'>
                    <ListItem 
                     {...itemProps}
                     onDelete = {() => onDelete(id)} />
                </li>
            )
        }
    })

    function isEmpty(obj){
        for(let key in obj){
            return true
        }
        return false
    }

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;