import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons';



const TestScreen = props => {
    const [enteredValue, setEnteredValue] = useState(0);

    const add = () => {
        return setEnteredValue(enteredValue+1);
    };

    const minus = () => {
        return setEnteredValue(enteredValue-1);
    };

    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={add}>
                <Ionicons name="add" size={24} color="black" />
            </TouchableOpacity>
            <Text
                style={styles.input}
                //keyboardType="number-pad"
                //onChangeText={(inputText) => { setEnteredValue(inputText.replace(/[^0-9]g/), ""); }}
                //value={enteredValue}
            >{enteredValue}</Text>
            <TouchableOpacity onPress={minus}>
                <FontAwesome name="minus" size={24} color="black" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        //flex: 1,
        width : '80%',
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        textAlign: "center",
        shadowColor:'gray',
        shadowOffset:{width:0,height:2},
        shadowOpacity:1,
        shadowRadius:10,
        backgroundColor:'powderblue',
        marginBottom:15,
        marginTop:100,
    },
    input: {
        borderBottomColor: 'steelblue',
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 3,
    }
});

export default TestScreen;