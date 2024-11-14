import { View, TextInput, Button, Image, Modal, StyleSheet } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ styles, setCourseGoals, endAddGoalHandler , visible }) => {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };

    function addGoalHandler() {
        setCourseGoals(currentCourseGoals => [
          ...currentCourseGoals, 
          {text: enteredGoalText, id: Math.random().toString()}
        ]);
    };

    return (
        <Modal visible={visible} animationType='slide'>
        <View style={sty.inputContainer}>
          <Image style={sty.image} source={require('../assets/images/goal.png')} />
            <TextInput onChangeText={goalInputHandler} style={sty.textInput} placeholder='Your course goal!'></TextInput>
            <View style={styles.buttonContainer} >
                <View style={styles.button}><Button onPress={endAddGoalHandler} color='#f31282' title='Cancel' /></View>               
                <View style={styles.button}><Button onPress={addGoalHandler} color='#5e0acc' title='Add Goal'></Button></View>
            </View>            
        </View>
        </Modal>
    )
}

export default GoalInput

const sty = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    margin: 20
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16
  },
})