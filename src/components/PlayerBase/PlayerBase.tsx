
import { StyledListContainer,StyledListBaner, } from '../../styles/StyledList';
import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';
import { Player } from '../../types/Player';
import { FetchList } from '../../utils/FetchList';


export const PlayerBase = ()=>{
    const playersData = FetchList('players');

console.log(playersData)

    return <StyledListContainer>
        <StyledListBaner>Players List</StyledListBaner>
        <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Surname</StyledTh>
                        <StyledTh>Team</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {!playersData.isLoading && playersData.list.map((player:Player) => (
                        <tr key={player.id}>
                            <StyledTd>{player.playerName}</StyledTd>
                            <StyledTd>{player.playerSurname}</StyledTd>
                            <StyledTd>{player.playerTeam}</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
        <button>Add</button>    
        <button>Edit</button>    
    </StyledListContainer>
}