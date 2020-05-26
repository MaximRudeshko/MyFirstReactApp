import React from 'react';

import styled from 'styled-components'

import './app-header.css'

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1{
        font-size: 26px;
        :hover{
            color:skyblue;
            cursor:pointer;
        }
        color: ${props => props.colored ? 'red' : 'black'}
    }
    p{
        font-size: 1.2rem;
        color: grey;
    }

`

 const AppHeader = () => {
    return (
        <Header colored>
            <h1>Rudeshko Maxim</h1>
            <p>3 записи, из них 0 понравилось</p>
        </Header>
    )
}

export default AppHeader;
