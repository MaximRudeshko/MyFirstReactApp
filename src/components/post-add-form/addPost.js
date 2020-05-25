import React from 'react';

import './post-add-form.css'

const FormAdd = () => {
    return (
        <div className="d-flex bottom-panel">
            <input 
                className="col-md-10" 
                type="text"
                placeholder = 'О чем вы сейчас думаете?'
            />
            <button 
                className = "btn btn-outline-secondary" 
                type="submit">
                Добавить
            </button>
        </div>
    )
}

export default FormAdd;