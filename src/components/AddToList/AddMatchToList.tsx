import { useState } from 'react';
import { Match } from '../../types/Match';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledForm, StyledFormBaner, StyledFormBtnBack, StyledFormBtnSubmit, StyledFormContainer, StyledFormInput, StyledFormLabel } from '../../styles/StyledForm';
import { useAddForm } from '../hooks/useAddForm';
import { v4 as uuidv4 } from 'uuid';

interface AddToListProps {
    showAddForm: () => void;
    setNotice: (notice: string) => void;
    showNotice: () => void;
}

export const AddMatchToList = (props: AddToListProps) => {
    const { showAddForm, setNotice, showNotice } = props;

    const addMatch = useAddForm('matches');

    const [matchData, setMatchData] = useState<Match>({
        id: uuidv4(),
        title: '',
        team1: '',
        team2: '',
        score: '',
        winner: '',
        date: '',
        location: '',
        duration: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMatchData({
            ...matchData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addMatch(matchData);
        showAddForm();
        showNotice();
        setNotice('Match added');
    };

    return (
        <StyledFormContainer>
            <StyledFormBaner>New Match</StyledFormBaner>
            <StyledFormBtnBack onClick={showAddForm}>
                <FontAwesomeIcon icon={faX} />
            </StyledFormBtnBack>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormLabel>
                    Title:
                    <StyledFormInput
                        type="text"
                        name="title"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Team 1:
                    <StyledFormInput
                        type="text"
                        name="team1"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Team 2:
                    <StyledFormInput
                        type="text"
                        name="team2"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Score:
                    <StyledFormInput
                        type="text"
                        name="score"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Winner:
                    <StyledFormInput
                        type="text"
                        name="winner"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Date:
                    <StyledFormInput
                        type="date"
                        name="date"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Location:
                    <StyledFormInput
                        type="text"
                        name="location"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Duration:
                    <StyledFormInput
                        type="number"
                        name="duration"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormBtnSubmit type="submit">Add match</StyledFormBtnSubmit>
            </StyledForm>
        </StyledFormContainer>
    );
};