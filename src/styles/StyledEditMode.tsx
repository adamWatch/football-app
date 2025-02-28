import styled from 'styled-components';

export const StyledDeleteBtn = styled.button`
    background-color: red;
    color: azure;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
    transition: 0.3s linear;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: red;
    }
    &:disabled{
        background-color: grey;
        color: white;
        cursor: not-allowed;
    }

`

export const StyledEditBtn = styled.button`
    background-color: #c4b142;
    color: azure;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
    transition: 0.3s linear;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: #6bdfa7;
    }


`

export const StyledEditModeBtn = styled.button`
    position: fixed;
    top: 15%;
    right:10%;
    background-color: #c4b142;
    color: azure;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
    transition: 0.3s linear;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: #6bdfa7;
    }


`

export const StyledAddBtn = styled.button`
    position: fixed;
    top: 15%;
    right:5%;
    background-color: #6bdfa7;
    color: azure;
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border: none;
    border-radius: 5px;
    transition: 0.3s linear;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: #6bdfa7;
    }
`