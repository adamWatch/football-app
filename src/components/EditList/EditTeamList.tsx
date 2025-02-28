import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFormBaner, StyledFormBtnBack, StyledOverlay } from '../../styles/StyledForm';
import { StyledEditListContainer } from '../../styles/StyledList';
import { StyledTable, StyledTd, StyledTh } from '../../styles/StyledTable';
import { Team } from '../../types/Team';
import { FetchList } from '../hooks/FetchList';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { useDeleteItem } from '../hooks/useDeleteItem';
import { useState } from 'react';
import { EditTeamForm } from '../EditForm/EditTeamForm';
import { StyledDeleteBtn, StyledEditBtn } from '../../styles/StyledEditMode';
import { Notice } from '../Notice/Notice';

interface EditListProps {
    showEditMode: () => void;
}

export const EditTeamList = (props: EditListProps) => {
    const { showEditMode } = props;

    const [notice, setNotice] = useState('');
    const [isNotice, setIsNotice] = useState(false);
    const deleteItem = useDeleteItem('teams');
    const [isEdit, setIsEdit] = useState(false);
    const [editTeamData, setEditTeamData] = useState<Team>({
        id: '',
        teamName: '',
        foundingYear: 0,
        location: ''
    });

    const showNotice = () => {
        setIsNotice(!isNotice);
        setTimeout(() => setIsNotice(false), 2500);
    };

    const deleteTeam = (id: string) => {
        if (window.confirm('Are you sure you want to delete this team?')) {
            deleteItem(id);
            setNotice('Team has been deleted');
            showNotice();
        }
    };

    const showEditForm = () => {
        setIsEdit(!isEdit);
    };

    const handleEditTeam = (team: Team) => {
        setEditTeamData(team);
        showEditForm();
    };

    const teamsData = FetchList('teams');

    return (
        <StyledEditListContainer>
            <StyledFormBaner>Edit Teams List</StyledFormBaner>
            <StyledFormBtnBack onClick={showEditMode}>
                <FontAwesomeIcon icon={faX} />
            </StyledFormBtnBack>
            <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Founding Year</StyledTh>
                        <StyledTh>Location</StyledTh>
                        <StyledTh>Edit</StyledTh>
                        <StyledTh>Delete</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {!teamsData.isLoading && teamsData.list.map((team: Team) => (
                        <tr key={team.id}>
                            <StyledTd>{team.teamName}</StyledTd>
                            <StyledTd>{team.foundingYear}</StyledTd>
                            <StyledTd>{team.location}</StyledTd>
                            <StyledTd>
                                <StyledEditBtn onClick={() => handleEditTeam(team)}>Edit</StyledEditBtn>
                            </StyledTd>
                            <StyledTd>
                                <StyledDeleteBtn onClick={() => deleteTeam(team.id)}>Delete</StyledDeleteBtn>
                            </StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
            {isEdit && <StyledOverlay />}
            {isEdit && <EditTeamForm showEditForm={showEditForm} editTeamData={editTeamData} showNotice={showNotice} setNotice={setNotice} />}
            {isNotice && <Notice text={notice} />}
        </StyledEditListContainer>
    );
};