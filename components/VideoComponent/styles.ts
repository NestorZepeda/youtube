import { StyleSheet} from "react-native";
const styles= StyleSheet.create({
    imagen:{
        width:'100%',
        aspectRatio:16/9,
    },
    tiempoC:{
        backgroundColor:'#00000099',
        height:25,
        width:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:4,
        position: 'absolute',
        right:5,
        bottom:5,

    },
    tiempo:{
        color:'white',
        fontWeight:'bold',
    },
    videoCard:{

    }, 
    filaComponentes:{
        flexDirection:'row',
        padding:10,
    },
    parteMedia:{
        marginHorizontal:10,
        flex:1,

    },
    titulo:{
        color:'white',
        fontSize:16,
        fontWeight:'500',
        marginBottom:5,

    },
    subtitulo:{
        color:'grey',
        fontSize:14,
        fontWeight:'500',
    },
   
    perfil:{
        width:50,
        height:50,
        borderRadius:25,
    },
});

export default styles;