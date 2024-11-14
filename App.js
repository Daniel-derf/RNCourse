import { StyleSheet, View, FlatList, Button } from 'react-native';
import {useState} from 'react'

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler(){
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false)
  }

  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id)
    });
  }


  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" 
      onPress={startAddGoalHandler} />
      <GoalInput endAddGoalHandler={endAddGoalHandler} setCourseGoals={setCourseGoals} visible={modalIsVisible} styles={styles} />
      <View style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData => {

        return <GoalItem styles={styles} 
        
        deleteGoalHandler={deleteGoalHandler} 
        itemData={itemData} />;

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
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
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
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: '100',
    marginHorizontal: 8
  }
});

//  export ANDROID_HOME=/home/daniel/Android/Sdk
