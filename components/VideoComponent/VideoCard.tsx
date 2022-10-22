import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles'
import { Item } from '../../interface/Video';
type Props = {
    item: Item;
}
const VideoCardItem = ({item}: Props) =>{
    return(
        <View style={styles.videoCard}>
            {/*Componente imagen*/}
            <View>
                <Image style={styles.imagen} source={{uri: item.snippet.thumbnails.high.url}}/>               
                <View style={styles.tiempoC}>
                    <Text style={styles.tiempo}>19:00</Text>
                </View>
            </View>
            <View>

            </View>
            
            
            {/*Titulo video */}
            <View style={styles.filaComponentes}>
                {/*foto perfil */}
                <Image style={styles.perfil} source={{uri: item.snippet.thumbnails.high.url}} />
                {/*Titulo */}
                <View style={styles.parteMedia}>
                    <Text style={styles.titulo}>{item?.snippet?.title}</Text>
                    <Text style={styles.subtitulo}>Tornes99 {item?.statistics?.viewCount} 1.5k 1 year ago</Text>

                </View>
                {/*Icono */}
                <Entypo name="dots-three-vertical" size={18} color="white" />
            </View>
        </View>
          
      
    )
}
export default VideoCardItem;

