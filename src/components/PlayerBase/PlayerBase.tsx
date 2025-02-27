
import { useState} from 'react';
import { StyledListContainer,StyledListBaner, } from '../../styles/StyledList';
import { StyledTable,  StyledTd, StyledTh,  } from '../../styles/StyledTable';
import { Player } from '../../types/Player';
import { FetchList } from '../hooks/FetchList';
import { AddToList } from '../AddToList/AddPlayerToList';
import { StyledOverlay } from '../../styles/StyledForm';
import { Notice } from '../Notice/Notice';
import { EditPlayerList } from '../EditList/EditPlayerList';



export const PlayerBase = ()=>{
    const [addForm, setAddForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [isNotice,setIsNotice] = useState(false);
    const playersData = FetchList('players');
    const [notice,setNotice] = useState('');
  

   const showAddForm = () => {
        setAddForm(!addForm);
    }
    const showEditMode = () => {
        setEditMode(!editMode); 
    }

    const showNotice = () => {
        setIsNotice(!isNotice);
        setTimeout(()=>setIsNotice(false),2500);
    }
    

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
        {editMode &&<EditPlayerList showEditMode={showEditMode}/> }
        {addForm &&<StyledOverlay/>}
        {editMode &&<StyledOverlay/>}
        {isNotice && <Notice text={notice}/>}
        <button onClick={showAddForm}>Add</button>    
        <button onClick={showEditMode}>Edit</button>    
    </StyledListContainer>
}