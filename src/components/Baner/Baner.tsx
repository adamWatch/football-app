import styled from 'styled-components';

const StyledBaner = styled.h1`
    font-size: 2.4rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-style: italic;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
    background: #8dabf8;
    background: -webkit-linear-gradient(to right, #a8c0ff, #3b2797); 
    background: linear-gradient(to right, #8baaf8, #392498);
`

export const Baner = ()=>{

    return <StyledBaner>
        Football App
    </StyledBaner>
}