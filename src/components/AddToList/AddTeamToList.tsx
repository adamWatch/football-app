import { useState } from 'react';
import { Team } from '../../types/Team';
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

export const AddTeamToList = (props: AddToListProps) => {
    const { showAddForm, setNotice, showNotice } = props;

    const addTeam = useAddForm('teams');

    const [teamData, setTeamData] = useState<Team>({
        id: uuidv4(),
        teamName: '',
        foundingYear: 0,
        location: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeamData({
            ...teamData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTeam(teamData);
        showAddForm();
        showNotice();
        setNotice('Team added');
    };

    return (
        <StyledFormContainer>
            <StyledFormBaner>New Team</StyledFormBaner>
            <StyledFormBtnBack onClick={showAddForm}>
                <FontAwesomeIcon icon={faX} />
            </StyledFormBtnBack>
            <StyledForm onSubmit={handleSubmit}>
                <StyledFormLabel>
                    Name:
                    <StyledFormInput
                        type="text"
                        name="teamName"
                        pattern="[A-Za-z]*"
                        title="Only uppercase and lowercase letters are allowed"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Founding Year:
                    <StyledFormInput
                        type="number"
                        name="foundingYear"
                        pattern="\d{4}"
                        title="Enter a valid year"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormLabel>
                    Location:
                    <StyledFormInput
                        type="text"
                        name="location"
                        pattern="[A-Za-z\s]*"
                        title="Only uppercase and lowercase letters are allowed"
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormBtnSubmit type="submit">Add team</StyledFormBtnSubmit>
            </StyledForm>
        </StyledFormContainer>
    );
};