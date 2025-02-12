import { useState } from 'react'
import { FetchList } from '../../utils/FetchList';
import { Player } from '../../types/Player';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';    

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
        playerTeam:''
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

    return <>
        <button onClick={showAddForm}><FontAwesomeIcon icon={faX}/></button>
        <form onSubmit={handleSubmit}>
            <label>Name:
                <input type='text' name='name' onChange={handleChange} />
            </label>
            <label>Surname:
                <input type='text' name='surname'onChange={handleChange}  />
            </label>
            <label>Team:
                <input type='text' name='team'onChange={handleChange}  />
            </label>
            <button type='submit'>Add player</button>
            
        </form>
    </>

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