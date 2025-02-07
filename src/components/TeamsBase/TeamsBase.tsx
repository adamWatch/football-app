import { useQuery } from '@tanstack/react-query';
import { StyledListContainer,StyledListBaner,} from '../../styles/StyledList';

import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';
import { Team } from '../../types/Team';



const FetchTeamList = () =>{

    const {data, isLoading} = useQuery({
        queryKey: ['teams'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/teams');
            return response.json();
        }
        
    })
    const teamsData = {
        currId: data ? data[0].currId: null,
        teamsList: data ? data.slice(1):[],
        isLoading
    }
    return teamsData;
}




export const TeamsBase = ()=>{
    const teamsData = FetchTeamList();



    return <StyledListContainer>
        <StyledListBaner>Teams List</StyledListBaner>
        <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Founding Year</StyledTh>
                        <StyledTh>Location</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {!teamsData.isLoading && teamsData.teamsList.map((team:Team) => (
                        <tr key={team.id}>
                            <StyledTd>{team.teamName}</StyledTd>
                            <StyledTd>{team.foundingYear}</StyledTd>
                            <StyledTd>{team.location}</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
    </StyledListContainer>
}