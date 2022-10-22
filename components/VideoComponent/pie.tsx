import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { Item } from '../../interface/Video'
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import styles from './styles';
type screenProp = NativeStackNavigationProp<AppStackParamList, 'Profile'>;

type Props = {
    item: Item
}

const VideoFooter = ({item}: Props) => {
    const navigation = useNavigation<screenProp>()

    function NavigateToVideo(item: Item) {
        navigation.navigate('Profile', item)
    }

    return (
        <View  style={styles.filaComponentes}>
            <TouchableOpacity
                onPress={ () => NavigateToVideo(item) }
            >
                
            </TouchableOpacity>
            <View >
                <Image source={{uri: item.snippet.thumbnails.high.url}} style={styles.perfil} ></Image>
                <View style={styles.parteMedia}>
                    <Text style={styles.titulo}>{item?.snippet?.title}</Text>
                    <Text style={styles.subtitulo}>
                        {item.snippet.channelTitle}{" "}{" "}
                        {item?.statistics?.viewCount }
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default VideoFooter