import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const ItemList = ({item,DeleteItem}) => { //item is a props 
    return (
        <TouchableOpacity style={styles.itemList}>
            <View style={styles.itemListView}> 
                <Text style={styles.itemListText}>
                    {item.text}
                </Text>
                <Icon name='remove' size={20} color='firebrick' onPress={()=>DeleteItem(item.id)}/>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    itemList:{
        padding:15,
        backgroundColor:'#f8f8f8',
        borderBottomWidth:1,
        borderBottomColor:'#eee',
    },
    itemListView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignContent:'center',

    },
    itemListText:{
        fontSize:20,
    },

})

export default ItemList;