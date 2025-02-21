import {  useState } from 'react'
import { Player } from '../../types/Player';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { StyledForm, StyledFormBaner, StyledFormBtnBack, StyledFormBtnSubmit, StyledFormContainer, StyledFormInput, StyledFormLabel } from '../../styles/StyledForm';
import { useAddForm } from '../hooks/useAddForm';
import {v4 as uuidv4} from 'uuid';

interface AddToListProps {
    showAddForm:()=>void;
    setNotice:(notice:string)=>void;
    showNotice:()=>void;

}


export const AddToList = (props:AddToListProps)=>{

    const {showAddForm, setNotice, showNotice} = props;

    const addPlayer = useAddForm('players');
    
    const[playerData,setPlayerData]  = useState<Player>({
        id:uuidv4(),
        playerName:'',
        playerSurname:'',
        playerTeam:'none'
        
    })

    


    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPlayerData({
            ...playerData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(playerData);
        addPlayer(playerData);
        showAddForm();
        showNotice();
        setNotice('Player added');
       
    }
    

    return <StyledFormContainer>
        <StyledFormBaner>New Player</StyledFormBaner>
        <StyledFormBtnBack onClick={showAddForm}><FontAwesomeIcon icon={faX}/></StyledFormBtnBack>
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormLabel>Name:
                <StyledFormInput type='text' name='playerName'
                pattern="[A-Za-z]*"
                title="Only uppercase and lowercase letters are allowed" 
                onChange={handleChange} />
            </StyledFormLabel>
            <StyledFormLabel>Surname:
                <StyledFormInput type='text' 
                pattern="[A-Za-z]*"
                title="Only uppercase and lowercase letters are allowed"
                name='playerSurname'onChange={handleChange}  />
            </StyledFormLabel>
            <StyledFormBtnSubmit type='submit'>Add player</StyledFormBtnSubmit>
            
        </StyledForm>
    </StyledFormContainer>

}
