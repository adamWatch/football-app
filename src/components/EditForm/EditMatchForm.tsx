import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledForm, StyledFormBaner, StyledFormBtnBack, StyledFormBtnSubmit, StyledFormContainer, StyledFormInput, StyledFormLabel } from '../../styles/StyledForm';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Match } from '../../types/Match';
import { useEditItem } from '../hooks/useEditItem';

interface EditFormProps {
    showEditForm: () => void;
    editMatchData: Match;
    showNotice: () => void;
    setNotice: (notice: string) => void;
}

export const EditMatchForm = (props: EditFormProps) => {
    const { showEditForm, editMatchData, showNotice, setNotice } = props;
    console.log(editMatchData);
    const editItem = useEditItem('matches');

    const [matchData, setMatchData] = useState<Match>({
        id: editMatchData.id,
        title: editMatchData.title,
        team1: editMatchData.team1,
        team2: editMatchData.team2,
        score: editMatchData.score,
        winner: editMatchData.winner,
        date: editMatchData.date,
        location: editMatchData.location,
        duration: editMatchData.duration,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMatchData({
            ...matchData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        editItem({ id: matchData.id, newData: matchData }, {
            onSuccess: () => {
                showEditForm();
                setNotice('Match has been updated');
                showNotice();
            },
        });
    };

    return (
        <StyledFormContainer>
            <StyledFormBaner>Edit Match</StyledFormBaner>
            <StyledFormBtnBack onClick={showEditForm}>
                <FontAwesomeIcon icon={faX} />
            </StyledFormBtnBack>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormLabel>
                    Title:
                    <StyledFormInput
                        type="text"
                        name="title"
                        value={matchData.title}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Team 1:
                    <StyledFormInput
                        type="text"
                        name="team1"
                        value={matchData.team1}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Team 2:
                    <StyledFormInput
                        type="text"
                        name="team2"
                        value={matchData.team2}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Score:
                    <StyledFormInput
                        type="text"
                        name="score"
                        value={matchData.score}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Winner:
                    <StyledFormInput
                        type="text"
                        name="winner"
                        value={matchData.winner}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Date:
                    <StyledFormInput
                        type="date"
                        name="date"
                        value={matchData.date}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Location:
                    <StyledFormInput
                        type="text"
                        name="location"
                        value={matchData.location}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Duration:
                    <StyledFormInput
                        type="number"
                        name="duration"
                        value={matchData.duration}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormBtnSubmit type="submit">Save Change</StyledFormBtnSubmit>
            </StyledForm>
        </StyledFormContainer>
    );
};