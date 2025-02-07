import { useState } from 'react'
import { Baner } from '../Baner/Baner'
import { Menu } from '../Menu/Menu'
import { PlayerBase} from '../PlayerBase/PlayerBase'
import {  StyledMainContainer } from './styleFootballApp'
import { TeamsBase } from '../TeamsBase/TeamsBase'
import { MatchBase } from '../MatchBase/MatchBase'
import { Stats } from '../Stats/Stats'



export const FootballApp = () =>{

    const [currTab,setCurrTab] = useState('Player Base');

    const renderPage = () => {
        switch(currTab){
            case 'Player Base':
                return <PlayerBase/>
            case 'Teams Base':
                return <TeamsBase/>
            case 'Match Base':
                return <MatchBase/>
            case 'Stats':
                return <Stats/>
            default:
                return <PlayerBase/>
        }
    }

    return(
        <StyledMainContainer>
            <Baner/> 
            <Menu changeTab = {setCurrTab} />
            {renderPage()}
        </StyledMainContainer>
    )
}