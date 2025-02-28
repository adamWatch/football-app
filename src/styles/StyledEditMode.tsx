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