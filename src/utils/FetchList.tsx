import { useQuery } from '@tanstack/react-query';

export const FetchList = (queryKey:string) =>{

    const {data, isLoading} = useQuery({
        queryKey: [queryKey],
        queryFn: async () => {
            const response = await fetch(`http://localhost:3000/${queryKey}`);
            return response.json();
        }
        
    })
    const editData = {
        currId: data ? data[0].currId : null,
        list: data ? data.slice(1) : [],
        isLoading
    }
    return editData;
}