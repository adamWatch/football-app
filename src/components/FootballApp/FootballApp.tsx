import { Baner } from '../Baner/Baner'
import { Menu } from '../Menu/Menu'
import {  StyledMainContainer } from './styleFootballApp'


export const FootballApp = () =>{


    return(
        <StyledMainContainer>
            <Baner/>
            <Menu/>
        </StyledMainContainer>
    )
}