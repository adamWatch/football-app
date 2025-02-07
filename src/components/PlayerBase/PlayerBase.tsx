import { useQuery } from '@tanstack/react-query';
import { StyledListContainer,StyledListBaner, } from '../../styles/StyledList';
import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';

interface Player {
    id: number;
    playerName: string;
    playerSurname: string;
    playerTeam: string;
}


const FetchPlayerList = () =>{

    const {data, isLoading} = useQuery({
        queryKey: ['players'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/players');
            return response.json();
        }
        
    })
    const PlayersData = {
        currId: data ? data[0].currId : null,
        playersList: data ? data.slice(1) : [],
        isLoading
    }
    return PlayersData;
}




export const PlayerBase = ()=>{
    const playersData = FetchPlayerList();

console.log(playersData)

    return <StyledListContainer>
        <StyledListBaner>Player List</StyledListBaner>
        <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Surname</StyledTh>
                        <StyledTh>Team</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {!playersData.isLoading && playersData.playersList.map((player:Player) => (
                        <tr key={player.id}>
                            <StyledTd>{player.playerName}</StyledTd>
                            <StyledTd>{player.playerSurname}</StyledTd>
                            <StyledTd>{player.playerTeam}</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
    </StyledListContainer>
}