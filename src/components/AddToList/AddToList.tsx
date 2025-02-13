import { useState } from 'react'
import { FetchList } from '../../utils/FetchList';
import { Player } from '../../types/Player';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    
import { StyledForm, StyledFormBaner, StyledFormBtnBack, StyledFormBtnSubmit, StyledFormContainer, StyledFormInput, StyledFormLabel } from '../../styles/StyledForm';

interface AddToListProps {
    showAddForm:()=>void;
}


export const AddToList = (props:AddToListProps)=>{

    const {showAddForm} = props;

    const playersData = FetchList('players');

    const[playerData,setPlayerData]  = useState<Player>({
        id:Number(playersData.currId) + 1,
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
        console.log(playerData)
    }

    return <StyledFormContainer>
        <StyledFormBaner>New Player</StyledFormBaner>
        <StyledFormBtnBack onClick={showAddForm}><FontAwesomeIcon icon={faX}/></StyledFormBtnBack>
        <StyledForm onSubmit={handleSubmit}>
            <StyledFormLabel>Name:
                <StyledFormInput type='text' name='name' onChange={handleChange} />
            </StyledFormLabel>
            <StyledFormLabel>Surname:
                <StyledFormInput type='text' name='surname'onChange={handleChange}  />
            </StyledFormLabel>
            <StyledFormBtnSubmit type='submit'>Add player</StyledFormBtnSubmit>
            
        </StyledForm>
    </StyledFormContainer>

}



    // const {mutate} = useMutation({
    //     mutationKey: [mutationKey],
    //     mutationFn: async (newPlayer:Player) => {
    //         const response = await fetch(`http://localhost:3000/${mutationKey}`,{
    //             method:'POST',
    //             headers:{
    //                 'Content-Type':'application/json'
    //             },
    //             body: JSON.stringify(newPlayer)
    //         })
    //         return response.json()
    //     }
    // })

    // return mutate;