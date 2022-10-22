import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useChanel } from '../../hooks/useCanal'
import { AppStackParamList } from '../../navigation/AppNavigator'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import tw from 'twrnc';
import VideoContainer from '../../components/VideoComponent/VideoContenedor'

interface Props extends NativeStackScreenProps<AppStackParamList, 'Profile'> {

}

const Profile = ({ route }: Props) => {
    const { chanelVids } = useChanel(route.params.snippet.channelId)

    return (
        <View style={tw``}>
            <Text style={tw`my-3 text-white text-xl`}>Videos subidos {route.params.snippet.channelTitle}</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={chanelVids}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <VideoContainer item={item} />
                )}
            />


        </View>
    )
}

export default Profile