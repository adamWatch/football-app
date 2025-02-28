import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFormBaner, StyledFormBtnBack, StyledOverlay } from '../../styles/StyledForm';
import { StyledEditListContainer } from '../../styles/StyledList';
import { StyledTable, StyledTd, StyledTh } from '../../styles/StyledTable';
import { Match } from '../../types/Match';
import { FetchList } from '../hooks/FetchList';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { useDeleteItem } from '../hooks/useDeleteItem';
import { useState } from 'react';
import { EditMatchForm } from '../EditForm/EditMatchForm';
import { StyledDeleteBtn, StyledEditBtn } from '../../styles/StyledEditMode';
import { Notice } from '../Notice/Notice';

interface EditListProps {
    showEditMode: () => void;
}

export const EditMatchList = (props: EditListProps) => {
    const { showEditMode } = props;

    const [notice, setNotice] = useState('');
    const [isNotice, setIsNotice] = useState(false);
    const deleteItem = useDeleteItem('matches');
    const [isEdit, setIsEdit] = useState(false);
    const [editMatchData, setEditMatchData] = useState<Match>({
        id: '',
        title: '',
        team1: '',
        team2: '',
        score: '',
        winner: '',
        date: '',
        location: '',
        duration: 0
    });

    const showNotice = () => {
        setIsNotice(!isNotice);
        setTimeout(() => setIsNotice(false), 2500);
    };

    const deleteMatch = (id: string) => {
        if (window.confirm('Are you sure you want to delete this match?')) {
            deleteItem(id);
            setNotice('Match has been deleted');
            showNotice();
        }
    };

    const showEditForm = () => {
        setIsEdit(!isEdit);
    };

    const handleEditMatch = (match: Match) => {
        setEditMatchData(match);
        showEditForm();
    };

    const matchesData = FetchList('matches');

    return (
        <StyledEditListContainer>
            <StyledFormBaner>Edit Matches List</StyledFormBaner>
            <StyledFormBtnBack onClick={showEditMode}>
                <FontAwesomeIcon icon={faX} />
            </StyledFormBtnBack>
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
                        <StyledTh>Edit</StyledTh>
                        <StyledTh>Delete</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {!matchesData.isLoading && matchesData.list.map((match: Match) => (
                        <tr key={match.id}>
                            <StyledTd>{match.title}</StyledTd>
                            <StyledTd>{match.team1}</StyledTd>
                            <StyledTd>{match.team2}</StyledTd>
                            <StyledTd>{match.score}</StyledTd>
                            <StyledTd>{match.winner}</StyledTd>
                            <StyledTd>{match.date}</StyledTd>
                            <StyledTd>{match.location}</StyledTd>
                            <StyledTd>{match.duration}</StyledTd>
                            <StyledTd>
                                <StyledEditBtn onClick={() => handleEditMatch(match)}>Edit</StyledEditBtn>
                            </StyledTd>
                            <StyledTd>
                                <StyledDeleteBtn onClick={() => deleteMatch(match.id)}>Delete</StyledDeleteBtn>
                            </StyledTd>
                        </tr>
                    ))}
                </tbody>
            </StyledTable>
            {isEdit && <StyledOverlay />}
            {isEdit && <EditMatchForm showEditForm={showEditForm} editMatchData={editMatchData} showNotice={showNotice} setNotice={setNotice} />}
            {isNotice && <Notice text={notice} />}
        </StyledEditListContainer>
    );
};