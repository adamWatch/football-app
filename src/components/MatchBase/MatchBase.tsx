import { useQuery } from '@tanstack/react-query';
import { StyledListContainer,StyledListBaner, } from '../../styles/StyledList';
import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';
import { Match } from '../../types/Match';
import { FetchList } from '../../utils/FetchList';



export const MatchBase = ()=>{
    const matchesData = FetchList('matches');


    return <StyledListContainer>
        <StyledListBaner>Matches List</StyledListBaner>
        <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>Title</StyledTh>
                        <StyledTh>Team 1</StyledTh>
                        <StyledTh>Team 2</StyledTh>
                        <StyledTh>Score</StyledTh>
                        <StyledTh>Winner</StyledTh>
                        <StyledTh>Date</StyledTh>
                        <StyledTh>Location</StyledTh>
                        <StyledTh>Duration</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {!matchesData.isLoading && matchesData.list.map((match:Match) => (
                        <tr key={match.id}>
                            <StyledTd>{match.title}</StyledTd>
                            <StyledTd>{match.team1}</StyledTd>
                            <StyledTd>{match.team2}</StyledTd>
                            <StyledTd>{match.score}</StyledTd>
                            <StyledTd>{match.winner}</StyledTd>
                            <StyledTd>{match.date}</StyledTd>
                            <StyledTd>{match.location}</StyledTd>
                            <StyledTd>{match.duration}</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
    </StyledListContainer>
}