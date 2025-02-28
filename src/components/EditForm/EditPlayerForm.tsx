import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { StyledForm, StyledFormBaner, StyledFormBtnBack, StyledFormBtnSubmit, StyledFormContainer, StyledFormInput, StyledFormLabel } from '../../styles/StyledForm'
import { faX } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Player } from '../../types/Player';
import { useEditItem } from '../hooks/useEditItem';

interface EditFormProps {

    showEditForm:()=>void;
    editPlayerData:Player;
    showNotice:()=>void;
    setNotice:(notice:string)=>void;
}

export const EditPlayerForm = (props:EditFormProps) => { 
    
    const {showEditForm, editPlayerData,showNotice,setNotice} = props;
    console.log(editPlayerData)
    const editItem = useEditItem('players');

    const[playerData,setPlayerData]  = useState<Player>({
        id:editPlayerData.id,
        playerName:editPlayerData.playerName,
        playerSurname:editPlayerData.playerSurname,
        playerTeam:editPlayerData.playerTeam
    })




    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPlayerData({
            ...playerData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        editItem({ id: playerData.id, newData: playerData }, {
            onSuccess: () => {
                showEditForm();
                setNotice('Player has been updated');
                showNotice();
            },
        });
    };
    return(
        <StyledFormContainer>
                <StyledFormBaner>Edit Player</StyledFormBaner>
                <StyledFormBtnBack onClick={showEditForm}><FontAwesomeIcon icon={faX}/></StyledFormBtnBack>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledFormLabel>Name:
                        <StyledFormInput type='text' name='playerName'
                        pattern="[A-Za-z]*"
                        title="Only uppercase and lowercase letters are allowed"
                        value={playerData.playerName} 
                        onChange={handleChange} />
                    </StyledFormLabel>
                    <StyledFormLabel>Surname:
                        <StyledFormInput type='text' 
                        pattern="[A-Za-z]*"
                        title="Only uppercase and lowercase letters are allowed"
                        value={playerData.playerSurname}
                        name='playerSurname'onChange={handleChange}  />
                    </StyledFormLabel>
                    <StyledFormBtnSubmit type='submit'>Save Change</StyledFormBtnSubmit>
                    
                </StyledForm>
            </StyledFormContainer>
    )
 }


