import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFormBaner, StyledFormBtnBack, StyledOverlay } from '../../styles/StyledForm';
import { StyledEditListContainer} from '../../styles/StyledList';
import { StyledTable, StyledTd, StyledTh } from '../../styles/StyledTable';
import { Player } from '../../types/Player';
import { FetchList } from '../hooks/FetchList';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';
import { useDeleteItem } from '../hooks/useDeleteItem';
import { useState } from 'react';
import { EditPlayerForm } from '../EditForm/EditPlayerForm';


interface EditListProps {
    showEditMode:()=>void;
}

export const EditPlayerList = (props:EditListProps) => {

        const {showEditMode} = props;

        const deleteItem = useDeleteItem('players');
        const [isEdit, setIsEdit] = useState(false);
        const [editPlayerData, setEditPlayerData] = useState<Player>({
            id:'',
            playerName:'',
            playerSurname:'',
            playerTeam:'none'
        });

        const deletePlayer = (id:string) => {
            if (window.confirm('Are you sure you want to delete this player?')) {
                deleteItem(id)
        };
        }
        
        const showEditForm = () => {
            setIsEdit(!isEdit); 
        }

        const handleEditPlayer = (player:Player) => {
            setEditPlayerData(player);
            showEditForm();
            
        }



       
        const playersData = FetchList('players');
    
        return(
 
    <StyledEditListContainer>
            <StyledFormBaner>Edit Players List</StyledFormBaner>
                    <StyledFormBtnBack onClick={showEditMode}><FontAwesomeIcon icon={faX}/></StyledFormBtnBack>
            <StyledTable>
                    <thead>
                        <tr>
                            <StyledTh>Name</StyledTh>
                            <StyledTh>Surname</StyledTh>
                            <StyledTh>Team</StyledTh>
                            <StyledTh>Edit</StyledTh>
                            <StyledTh>Delete</StyledTh>
                        </tr>
                    </thead>
                    <tbody>
                        {!playersData.isLoading && playersData.list.map((player:Player) => (
                            <tr key={player.id}>
                                <StyledTd>{player.playerName}</StyledTd>
                                <StyledTd>{player.playerSurname}</StyledTd>
                                <StyledTd>{player.playerTeam}</StyledTd>
                                <StyledTd><button onClick={()=>handleEditPlayer(player)}>Edit</button></StyledTd>
                                {player.playerTeam === 'none' ? <StyledTd><button onClick={()=>deletePlayer(player.id)}>Delete</button></StyledTd> : <StyledTd><button disabled>Delete</button></StyledTd>}
                            </tr>
                        ))} 
                    </tbody>
                </StyledTable>
                {isEdit && <StyledOverlay/> }
                {isEdit && <EditPlayerForm showEditForm={showEditForm} editPlayerData={editPlayerData} />}        
                </StyledEditListContainer>
        )

            
} 