import { View, TextInput, Button } from 'react-native';
import { useState } from 'react';

const GoalInput = ({ styles, setCourseGoals }) => {
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
        <View style={styles.inputContainer}>
            <TextInput onChangeText={goalInputHandler} style={styles.textInput} placeholder='Your course goal!'></TextInput>
            <Button onPress={addGoalHandler} title='Add Goal'></Button>
        </View>
    )
}

export default GoalInput