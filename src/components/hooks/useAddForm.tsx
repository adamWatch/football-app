import { useMutation } from '@tanstack/react-query';
import { Player } from '../../types/Player';


export const useAddForm = (type:string) => {
    const { mutate } = useMutation({
        mutationKey: [type],
        mutationFn: async (newData:Player) => {
        const res = await fetch(`http://localhost:3000/${type}/`, {
        method: 'POST',
        body: JSON.stringify(newData)
        });
        return res.json();
        }
        })

    return mutate;
}

