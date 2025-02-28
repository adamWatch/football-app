import { useState } from 'react';
import { StyledListContainer, StyledListBaner } from '../../styles/StyledList';
import { StyledTable, StyledTd, StyledTh } from '../../styles/StyledTable';
import { Team } from '../../types/Team';
import { FetchList } from '../hooks/FetchList';
import { AddTeamToList } from '../AddToList/AddTeamToList';
import { StyledOverlay } from '../../styles/StyledForm';
import { Notice } from '../Notice/Notice';
import { EditTeamList } from '../EditList/EditTeamList';
import { StyledAddBtn, StyledEditModeBtn } from '../../styles/StyledEditMode';

export const TeamsBase = () => {
    const [addForm, setAddForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isNotice, setIsNotice] = useState(false);
    const teamsData = FetchList('teams');
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

    return (
        <StyledListContainer>
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
                    {!teamsData.isLoading && teamsData.list.map((team: Team) => (
                        <tr key={team.id}>
                            <StyledTd>{team.teamName}</StyledTd>
                            <StyledTd>{team.foundingYear}</StyledTd>
                            <StyledTd>{team.location}</StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
            {addForm && (
                <AddTeamToList
                    showAddForm={showAddForm}
                    showNotice={showNotice}
                    setNotice={setNotice}
                />
            )}
            {editMode &&<EditTeamList showEditMode={showEditMode}/> }
            {addForm && <StyledOverlay />}
            {editMode &&<StyledOverlay/>}
            {isNotice && <Notice text={notice} />}
            <StyledAddBtn onClick={showAddForm}>Add</StyledAddBtn>    
            <StyledEditModeBtn onClick={showEditMode}>Edit</StyledEditModeBtn>
        </StyledListContainer>
    );
};