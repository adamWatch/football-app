
import { useEffect, useState} from 'react';
import { StyledListContainer,StyledListBaner, } from '../../styles/StyledList';
import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';
import { Player } from '../../types/Player';
import { FetchList } from '../../utils/FetchList';
import { AddToList } from '../AddToList/AddToList';
import { StyledOverlay } from '../../styles/StyledForm';
import { Notice } from '../Notice/Notice';


export const PlayerBase = ()=>{
    const [addForm, setAddForm] = useState(false);
    const [isNotice,setIsNotice] = useState(false);
    const playersData = FetchList('players');
    const [notice,setNotice] = useState('');
  

   const showAddForm = () => {
        setAddForm(!addForm);
    }

    const showNotice = () => {
        setIsNotice(!isNotice);
    }
    
    console.log(playersData)

    return <StyledListContainer>
        <StyledListBaner>Players List</StyledListBaner>
        <StyledTable>
                <thead>
                    <tr>
                        <StyledTh>Name</StyledTh>
                        <StyledTh>Surname</StyledTh>
                        <StyledTh>Team</StyledTh>
                    </tr>
                </thead>
                <tbody>
                    {!playersData.isLoading && playersData.list.map((player:Player) => (
                        <tr key={player.id}>
                            <StyledTd>{player.playerName}</StyledTd>
                            <StyledTd>{player.playerSurname}</StyledTd>
                            <StyledTd>{player.playerTeam}</StyledTd>
                        </tr>
                    ))} 
                </tbody>
            </StyledTable>
        {addForm &&<AddToList showAddForm ={showAddForm} showNotice = {showNotice} setNotice = {setNotice} />  } 
        {addForm &&<StyledOverlay/>}
        {isNotice && <Notice text={notice}/>}
        <button onClick={showAddForm}>Add</button>    
        <button>Edit</button>    
    </StyledListContainer>
}