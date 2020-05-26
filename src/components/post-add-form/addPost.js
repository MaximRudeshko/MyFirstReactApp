import React, { Component } from 'react';

import './post-add-form.css'

export default class FormAdd extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
        this.state = {
            text: ''
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onValueChange(e){
        this.setState({
            text : e.target.value
        })
    }

    onFormSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }

    render(){
        return (
            <form 
                onSubmit = {this.onFormSubmit}
                className="d-flex bottom-panel">
                <input
                    onChange = {this.onValueChange} 
                    value = {this.state.text}
                    className="form-control new-post-label" 
                    type="text"
                    placeholder = 'О чем вы сейчас думаете?'
                />
                <button 
                    className = "btn btn-outline-secondary" 
                    type="submit">
                    Добавить
                </button>
            </form>
        )
    }
}
