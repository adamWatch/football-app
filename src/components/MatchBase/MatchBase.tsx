import { useQuery } from '@tanstack/react-query';
import { StyledListContainer,StyledListBaner, } from '../../styles/StyledList';
import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';
import { Match } from '../../types/Match';


const FetchMatchList = () =>{

    const {data, isLoading} = useQuery({
        queryKey: ['matches'],
        queryFn: async () => {
            const response = await fetch('http://localhost:3000/matches');
            return response.json();
        }
        
    })
    const matchesData = {
        currId: data ? data[0].currId : null,
        matchesList: data ? data.slice(1) : [],
        isLoading
    }
    return matchesData;
}




export const MatchBase = ()=>{
    const matchesData = FetchMatchList();


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
                    {!matchesData.isLoading && matchesData.matchesList.map((match:Match) => (
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