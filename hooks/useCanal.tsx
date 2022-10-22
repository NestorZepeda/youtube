import { useState, useEffect } from "react"
import { Item, Videos } from "../interface/Video";
import { youtube } from '../services/api';

interface Props {
    chanelVids: Item[]
}
  
export const useChanel = (id: string) => {
    const [chanelVids, setChanelVids] = useState<Props>({
        chanelVids: undefined,
    })
  
    const getchanelVids = async () => {
        const res = await youtube.get<Videos>(`/search?channelId=${id}&part=snippet&order=date&maxResults=10`)
        setChanelVids({
            chanelVids: res.data.items,
        })
    }
  
    useEffect(() => {
        getchanelVids()
    }, [])
  
    return {
        ...chanelVids,
    }
}