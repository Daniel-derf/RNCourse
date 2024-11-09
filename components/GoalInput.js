import { View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ styles, setCourseGoals, visible }) => {
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
        <View style={styles.inputContainer}>
            <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your course goal!'></TextInput>
            <Button onPress={addGoalHandler} title='Add Goal'></Button>
        </View>
        </Modal>
    )
}

export default GoalInput