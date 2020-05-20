import React from 'react';
import {View,StyleSheet,Text} from 'react-native' 


const Header =props =>{
    return(
        <View style={styles.view}>
            <Text style={styles.text}>{props.title}</Text>
        </View>

    );
}
const styles=StyleSheet.create({
    view:{
        height:60,
        backgroundColor:'red',
        padding:15,
       

    },
    text:{
        fontSize:25,
        color:'#fff',
        
        textAlign:'center'
    }
})

export default Header