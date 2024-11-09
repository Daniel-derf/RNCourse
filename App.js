import { StyleSheet, View, FlatList } from 'react-native';
import {useState} from 'react'

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
  }


  return (
    <View style={styles.appContainer}>
      <GoalInput styles={styles} setCourseGoals={setCourseGoals} />
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData => {
        return <GoalItem styles={styles} deleteGoalHandler={deleteGoalHandler} itemData={itemData} />;
      }} alwaysBounceVertical={false}/>
      </View>
    </View> 
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc"
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5
  }
});

//  export ANDROID_HOME=/home/daniel/Android/Sdk
