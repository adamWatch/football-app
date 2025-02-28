import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledForm, StyledFormBaner, StyledFormBtnBack, StyledFormBtnSubmit, StyledFormContainer, StyledFormInput, StyledFormLabel } from '../../styles/StyledForm';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Team } from '../../types/Team';
import { useEditItem } from '../hooks/useEditItem';

interface EditFormProps {
    showEditForm: () => void;
    editTeamData: Team;
    showNotice: () => void;
    setNotice: (notice: string) => void;
}

export const EditTeamForm = (props: EditFormProps) => {
    const { showEditForm, editTeamData, showNotice, setNotice } = props;
    console.log(editTeamData);
    const editItem = useEditItem('teams');

    const [teamData, setTeamData] = useState<Team>({
        id: editTeamData.id,
        teamName: editTeamData.teamName,
        foundingYear: editTeamData.foundingYear,
        location: editTeamData.location,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTeamData({
            ...teamData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        editItem({ id: teamData.id, newData: teamData }, {
            onSuccess: () => {
                showEditForm();
                setNotice('Team has been updated');
                showNotice();
            },
        });
    };

    return (
        <StyledFormContainer>
            <StyledFormBaner>Edit Team</StyledFormBaner>
            <StyledFormBtnBack onClick={showEditForm}>
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
                        value={teamData.teamName}
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
                        value={teamData.foundingYear}
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
                        value={teamData.location}
                        onChange={handleChange}
                    />
                </StyledFormLabel>
                <StyledFormBtnSubmit type="submit">Save Change</StyledFormBtnSubmit>
            </StyledForm>
        </StyledFormContainer>
    );
};