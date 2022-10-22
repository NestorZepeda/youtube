import { useState, useEffect } from "react"
import { ItemRe, Recommended } from "../interface/Recomendaciones"
import { youtube } from "../services/api"


interface RecommendedProps {
    recommendation: ItemRe[]
}
  
export const useRecommendations = (id: string) => {
    const [recommendation, setRecommendation] = useState<RecommendedProps>({
        recommendation: undefined,
    })
  
    const getRecommendationsInformation = async () => {
        const res = await youtube.get<Recommended>(
            `/search?part=snippet&maxResults=5&relatedToVideoId=${id}&type=video`,
        )

        setRecommendation({
            recommendation: res.data.items,
        })
    }
  
    useEffect(() => {
        getRecommendationsInformation()
    }, [])
  
    return {
        ...recommendation,
    }
}