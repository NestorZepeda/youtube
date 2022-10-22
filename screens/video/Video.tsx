import { ScrollView, View } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../../navigation/AppNavigator'
import YoutubePlayer from 'react-native-youtube-iframe'
import tw from 'twrnc';
import VideoFooter from '../../components/VideoComponent/pie'
import Recomendations from '../../components/VideoComponent/Recomendaciones'

interface Props extends NativeStackScreenProps<AppStackParamList, 'Video'>{}

const Video = ({route}: Props) => {
    return (
        <View style={tw`bg-[#1b1c1e] h-full`}>
            <YoutubePlayer
                height={240}
                videoId={route.params.id}
            />
            <ScrollView style={tw`bg-[#1b1c1e]`}>
                <VideoFooter item={route.params} />
                <Recomendations id={route.params.id} />
            </ScrollView>
        </View>
    )
}

export default Video