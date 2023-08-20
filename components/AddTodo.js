import React, { useState } from 'react'
import { StyleSheet, TextInput, View, FlatList } from "react-native";
import { Button } from 'react-native-web';

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('');

    const changeHandler = (val) => {
     setText(val)
    }
  return (
    <View><TextInput 
        placeholer="new todo...."
        onChangeText={changeHandler}
        style={styles.input}
    />
    <Button onPress={()=> submitHandler(text)} title="add todo" color="coral"/>
    </View>
  )
}


const styles = StyleSheet.create({
    input: {
        paddingHorizontal : 8 ,
        paddingVertical : 6 ,
        marginBottom : 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd"
    }
  });