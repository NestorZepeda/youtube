import { View} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { youtube } from "../../services/api"
import { Videos } from '../../interface/Video'
import tw from 'twrnc';
import VideoContainer from '../../components/VideoComponent/VideoContenedor'

const Home = () => {
    const [videos, setVideos] = useState<Videos>();
    

    const getVideos = async () => {
        const response = await youtube.get<Videos>(
          "/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=10",
        )
        setVideos(response.data)
    }

    useEffect(() => {
        getVideos()
    }, [])

    return (
        <View style={tw`bg-[#1b1c1e]`}>
            <FlatList showsHorizontalScrollIndicator = {false}
                data = {videos?.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return <VideoContainer item={item} />;
                }}
            />
        </View>
    )

}

export default Home