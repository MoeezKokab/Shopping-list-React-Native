import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, TextInput, Text, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const Additem = ({ AddItem }) => {
    const [inputText, setText] = useState(' ');

    const onChange = input => { // set the value of inputTxt hook

        setText(input)
    }
    const add = () => {
        let tempString = inputText;
        if (!tempString.replace(/\s/g, '').length) { //check space and empty
            console.log('string only contains whitespace (ie. spaces, tabs or line breaks)');
            Alert.alert('write something')
        }

        else {
            AddItem(inputText)
            console.log(tempString)
        }

    }


    return (


        <View style={styles.view}>
            <TextInput placeholder='ADD item...' style={styles.itemTextInput} onChangeText={onChange}>

            </TextInput>

            <TouchableOpacity style={styles.itemTouch} onPress={add}>
                <View style={styles.textView}><Text style={styles.itemText}>
                    Add item
            </Text>
                    <Icon name='plus' size={20} />
                </View>

            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        borderWidth: 1,
        padding: 7,
        borderBottomLeftRadius: 20,
        backgroundColor: '#e85d5a',
        borderBottomRightRadius: 20
    },
    itemTextInput: { height: 20, fontSize: 20 },
    itemText: {
        fontSize: 20,
        justifyContent: 'center',
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    itemTouch: {},

});

export default Additem;