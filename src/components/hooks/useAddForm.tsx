import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DataTypes } from '../../types/DataTypes';

export const useAddForm = <T extends keyof DataTypes>(type: T) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: [type],
        mutationFn: async (newData: DataTypes[T]) => {
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

