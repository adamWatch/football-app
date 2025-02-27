import { useMutation, useQueryClient } from '@tanstack/react-query';
import { DataTypes } from '../../types/DataTypes';

export const useEditItem = <T extends keyof DataTypes>(type: T) => {
    const queryClient = useQueryClient();

    const { mutate } = useMutation({
        mutationKey: [type],
        mutationFn: async ({ id, newData }: { id: string; newData: Partial<DataTypes[T]> }) => {
            const res = await fetch(`http://localhost:3000/${type}/${id}`, {
                method: 'PATCH',
                body: JSON.stringify(newData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!res.ok) {
                throw new Error('Failed to update item');
            }
            return res.json();
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [type] });
        },
    });

    return mutate;
};