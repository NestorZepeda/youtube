import { Image, Text, View } from 'react-native';
import React from 'react'
import tw from 'twrnc';
import { ItemCom } from '../../interface/Comentarios';

type Props = {
    item: ItemCom
}

const Comment = ({ item }: Props) => {
    return (
        <View style={tw`flex-row py-4 px-4`}>
            <Image source={{ uri: item.snippet.topLevelComment.snippet.authorProfileImageUrl }} style={tw`w-10 h-10 rounded-full`}></Image>
            <View>
                <Text style={tw`ml-2 font-bold text-white`}>{item.snippet.topLevelComment.snippet.authorDisplayName}</Text>
                <Text style={tw`p-2 mr-2 text-white`}>{item.snippet.topLevelComment.snippet.textOriginal}</Text>
            </View>
        </View>
    )
}

export default Comment