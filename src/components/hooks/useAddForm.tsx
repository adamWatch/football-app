import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Player } from '../../types/Player';

export const useAddForm = (type: string) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: [type],
        mutationFn: async (newData: Player) => {
            const res = await fetch(`http://localhost:3000/${type}/`, {
                method: 'POST',
                body: JSON.stringify(newData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [type] });
        }, 
    });

    return mutate;
};

