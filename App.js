import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './component/Header';
import ItemList from './component/ItemList';
import AddItem from './component/AddItem';
import { v4 as uuidv4 } from 'uuid';
import Additem from './component/AddItem';


export default function App() {
  const [item, setItem] = useState([
    // { id: uuidv4(), text: 'milk' },
    // { id: uuidv4(), text: 'milk' },
    // { id: uuidv4(), text: 'milk' },
    // { id: uuidv4(), text: 'milk' },

  ])

  //remove item from list
  const DeleteItem = id =>{
    setItem(preItem => 
      {
        return preItem.filter(item => item.id != id);
      })
  }
//add item from list
  const AddItem =inputText=>{
    setItem(preItem =>{
      return [{ id: uuidv4(), text: inputText },...preItem]
    })

  }
  return (
    <View style={styles.container}>
      
      <Header title='shopping List' />
      <Additem AddItem={AddItem}/>
      <FlatList
        data={item}
  renderItem={({item})=><ItemList item={item} DeleteItem={DeleteItem}/>}

      />


    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40

  },
});
