import { useState } from 'react';
import { StyledListContainer,StyledListBaner, } from '../../styles/StyledList';
import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';
import { Match } from '../../types/Match';
import { FetchList } from '../hooks/FetchList';
import { EditMatchList } from '../EditList/EditMatchList';
import { StyledOverlay } from '../../styles/StyledForm';
import { StyledAddBtn, StyledEditModeBtn } from '../../styles/StyledEditMode';
import { Notice } from '../Notice/Notice';
import { AddMatchToList } from '../AddToList/AddMatchToList';



export const MatchBase = ()=>{
    const [addForm, setAddForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isNotice, setIsNotice] = useState(false);
    const matchesData = FetchList('matches');
    const [notice, setNotice] = useState('');

    const showAddForm = () => {
        setAddForm(!addForm);
    };

    const showEditMode = () => {
        setEditMode(!editMode); 
    }

    const showNotice = () => {
        setIsNotice(!isNotice);
        setTimeout(() => setIsNotice(false), 2500);
    };


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
            {addForm && (
                <AddMatchToList
                    showAddForm={showAddForm}
                    showNotice={showNotice}
                    setNotice={setNotice}
                />
            )}                
            {editMode &&<EditMatchList showEditMode={showEditMode}/> }
            {addForm && <StyledOverlay />}
            {editMode &&<StyledOverlay/>}
            {isNotice && <Notice text={notice} />}
            <StyledAddBtn onClick={showAddForm}>Add</StyledAddBtn>    
            <StyledEditModeBtn onClick={showEditMode}>Edit</StyledEditModeBtn>               
            </StyledTable>
    </StyledListContainer>
}