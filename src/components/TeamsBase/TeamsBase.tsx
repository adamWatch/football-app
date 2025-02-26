import { useQuery } from '@tanstack/react-query';
import { StyledListContainer,StyledListBaner,} from '../../styles/StyledList';

import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';
import { Team } from '../../types/Team';
import { FetchList } from '../hooks/FetchList';


export const TeamsBase = ()=>{
    const teamsData = FetchList('teams');



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
                    {!teamsData.isLoading && teamsData.list.map((team:Team) => (
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