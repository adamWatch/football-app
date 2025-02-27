import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StyledFormBaner, StyledFormBtnBack } from '../../styles/StyledForm';
import { StyledEditListContainer} from '../../styles/StyledList';
import { StyledTable, StyledTd, StyledTh } from '../../styles/StyledTable';
import { Player } from '../../types/Player';
import { FetchList } from '../hooks/FetchList';
import { faX } from '@fortawesome/free-solid-svg-icons/faX';


interface EditListProps {
    type:string
    showEditMode:()=>void;
}

export const EditPlayerList = (props:EditListProps) => {

        const {type,showEditMode} = props;
    
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
                                <StyledTd><button>Edit</button></StyledTd>
                                {player.playerTeam === 'none' ? <StyledTd><button>Delete</button></StyledTd> : <StyledTd><button disabled>Delete</button></StyledTd>}
                            </tr>
                        ))} 
                    </tbody>
                </StyledTable>
                </StyledEditListContainer>
        )

            
} 