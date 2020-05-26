import React, { Component } from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel/index';
import PostList from '../post-list/index';
import PostStatusFilter from '../post-status-filter/index'
import FormAdd from '../post-add-form/index';

import './app.css'

import styled from 'styled-components';


const AppBlock = styled.div`
    margin: 50px auto;
    max-width: 800px;
`;

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label: "Goint to learn React", important : true, id : 1},
                {label: "It is so good", important : false, id : 2},
                {label: "I need a break...", important : false, id : 3}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

        this.maxId = 4;
    }

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id)

            const newArray = [...data.slice(0,index), ...data.slice(index + 1)]

            return {
                data: newArray
            }
            
        })
        
    }

    addItem(body){
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data:newArr
            }
        })
    }

    render(){
        return (
            <AppBlock>
                <AppHeader/>
                <div className='search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts = {this.state.data}
                    onDelete = {this.deleteItem}
                />
                <FormAdd 
                    onAdd = {this.addItem}
                />
            </AppBlock>    
        )
    }
}

