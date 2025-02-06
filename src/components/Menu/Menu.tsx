import styled from 'styled-components';

const StyledMenu = styled.nav`
    
    display: flex;
    width: 100%;
    background: #8dabf8;
    background: -webkit-linear-gradient(to right, #a8c0ff, #3b2797); 
    background: linear-gradient(to right, #8baaf8, #392498);
    padding: 0.5rem;
    border-bottom: 3px solid black;

`
const StyledNavItem = styled.button`
    width: 25%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    padding: 0.7rem;
    margin-right: 0.3rem;
    background-image: linear-gradient(to right, #314755 0%, #26a0da  51%, #314755  100%);
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;            
    box-shadow: 0 0 10px #eee;
    border-radius: 10px;
    display: block;
    
    &:hover{
        background-position: right center;
            color: #fff;
            text-decoration: none;
    }
    &:focus{
        background-image: linear-gradient(to right, #101c24 0%, #0e455f  51%, #314755  100%);
        color: #49be38;
    }

`


export const Menu = ()=>{

    return <StyledMenu>
        <StyledNavItem>Player Base</StyledNavItem>
        <StyledNavItem>Teams Base</StyledNavItem>
        <StyledNavItem>Match Base</StyledNavItem>
        <StyledNavItem>Stats</StyledNavItem>
    </StyledMenu>
}