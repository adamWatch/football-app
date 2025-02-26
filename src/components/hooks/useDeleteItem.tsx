import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DataTypes } from '../../types/DataTypes';

export const useDeleteItem = <T extends keyof DataTypes>(type: T) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: [type],
        mutationFn: async (id: string) => {
            const res = await fetch(`http://localhost:3000/${type}/${id}`, {
                method: 'DELETE',
            });
            if (!res.ok) {
                throw new Error('Failed to delete item');
            }
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [type] });
        },
    });

    return mutate;
};