import { View, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import VideoFooter from './pie'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { useNavigation } from '@react-navigation/native';
import { Item } from '../../interface/Video';
import styles from '../../components/VideoComponent/styles';
type screenProp = NativeStackNavigationProp<AppStackParamList, 'Video'>;

type Props = {
    item: Item;
}

const VideoContainer = ({ item }: Props) => {
    const navigation = useNavigation<screenProp>()
    const { width } = Dimensions.get('window')
    const { top, bottom } = useSafeAreaInsets()

    function NavigateToVideo(item: Item) {
        navigation.navigate('Video', item)
    }
    
    return (
        <View style={styles.videoCard}>
            <TouchableOpacity
                onPress={ () => NavigateToVideo(item) }
                activeOpacity={0.8}>
                <Image source={{ uri: item.snippet.thumbnails.high.url }} style={styles.imagen}></Image>
            </TouchableOpacity>

            <VideoFooter item={item} />
        </View>
    )
}

export default VideoContainer