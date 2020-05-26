import React, { Component } from 'react';
import nextId from "react-id-generator";
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
                {label: "Goint to learn React", important : false, like: false, id : nextId()},
                {label: "It is so good", important : false, like: false, id : nextId()},
                {label: "I need a break...", important : false, like: false, id : nextId()}
            ],
            temp : '',
            filter : 'all'
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

    }

      

    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(item => item.id === id)

            console.log(index)
        
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
            id: nextId()
        }

        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return{
                data:newArr
            }
        })
    }

    onToggleLike(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, like : !oldItem.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }

        })
    }

    onToggleImportant(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const oldItem = data[index];
            const newItem = {...oldItem, important : !oldItem.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return {
                data: newArr
            }

        })
    }

    searchItems(items,temp){
        if(temp.length === 0){
            return items
        }

        return items.filter(item => item.label.indexOf(temp) > -1)
    }

    onUpdateSearch(temp){
        this.setState({temp})
    }

    filterPost(items,filter){
        if(filter === 'like'){
            return items.filter(item => item.like)
        }else{
            return items
        }
    }

    onFilterSelect(filter){
        this.setState({filter})
    }
    

    render(){

        const liked = this.state.data.filter(item => item.like).length;
        const allPosts = this.state.data.length;

        const {data, temp, filter} = this.state
        const visibleItems = this.filterPost(this.searchItems(data, temp), filter)

        return (
            <AppBlock>
                <AppHeader
                    liked = {liked}
                    allPosts = {allPosts}/>
                <div className='search-panel d-flex'>
                    <SearchPanel
                    onUpdateSearch = {this.onUpdateSearch}/>
                    <PostStatusFilter
                    filter ={filter}
                    onFilterSelect = {this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts = {visibleItems}
                    onDelete = {this.deleteItem}
                    onToggleLike = {this.onToggleLike}
                    onToggleImportant = {this.onToggleImportant}
                />
                <FormAdd 
                    onAdd = {this.addItem}
                />
            </AppBlock>    
        )
    }
}

