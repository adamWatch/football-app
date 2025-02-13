import styled from 'styled-components';

export const StyledOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 18; /* Ensure it is above other content */
`;

export const StyledFormContainer = styled.div`
    display: flex;
    position: absolute;
    top: 25%;
    right: 10%;
    flex-direction: column;
    padding-top: 0.5rem;
    width: 80%;
    align-items: center;
    justify-content: center;
    height: 70%;
    background: #a8c0ff;
    background: -webkit-linear-gradient(to right, #a8c0ff, #3f2b96); 
    background: linear-gradient(to right, #a8c0ff, #3f2b96);
    border-radius: 10px;
    z-index: 20;
`
export const StyledFormBaner = styled.h2`
    font-size: 2.5rem;
    padding: 0.5rem;
    color: #6bdfa7;

`


export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    

`

export const StyledFormBtnBack = styled.button`
    background-color: red;
    position: relative;
    bottom: 17%;
    left: 45%;
    color: azure;
    border: none;
    border-radius: 50%;
    font-size: 2.5rem;
    padding: 1rem;
    margin: 0.5rem;
    transition: 0.3s linear;
    cursor: pointer;
    &:hover{
        background-color: white;
        color: red;
    }

`

export const StyledFormBtnSubmit = styled.button`

    background-color: #42c485;
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
export const StyledFormLabel = styled.label`
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    color: black;
    cursor: pointer;
`

export const StyledFormInput = styled.input`
    font-size: 1.5rem;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 5px;
    border: none;
    transition: 0.3s linear;
    &:focus{
        background-color: #42c485;
        color: azure;
    }
`