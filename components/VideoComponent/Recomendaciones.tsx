import { FlatList, Text, View } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { useRecommendations } from '../../hooks/useRecomendaciones';
import { useComments } from '../../hooks/useComentarios';
import VideoContainer from './VideoContenedor';
import Comment from './Comentarios';


type Props = {
    id: string;
}

const Recomendations = ({ id }: Props) => {
    const { recommendation } = useRecommendations(id)
    const { comments } = useComments(id)

    return (
        <View>
            <Text style={tw`text-lg text-white mt-3 border-t-2 border-gray-200 px-2`}>Comentarios</Text>

            <FlatList
                showsHorizontalScrollIndicator={false}
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Comment item={item} />
                )}
            />

            <Text style={tw`text-lg text-white mt-3 px-2`}>Recomendados</Text>
            <FlatList
                showsHorizontalScrollIndicator={false}
                data={recommendation}
                keyExtractor={(item) => item.id.videoId}
                renderItem={({ item }) => (
                    <VideoContainer item={item} />
                )}
            />           
        </View>
    )
}

export default Recomendations