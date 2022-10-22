import { useState, useEffect } from "react"
import { Comments, ItemCom } from "../interface/Comentarios";
import { youtube } from '../services/api';

interface Props {
    comments: ItemCom[]
}
  
export const useComments = (id: string) => {
    const [comments, setComments] = useState<Props>({
        comments: undefined,
    })
  
    const getComments = async () => {
        const res = await youtube.get<Comments>(`/commentThreads?part=snippet&videoId=${id}`)
        setComments({
            comments: res.data.items,
        })
    }
  
    useEffect(() => {
        getComments()
    }, [])
  
    return {
        ...comments,
    }
}