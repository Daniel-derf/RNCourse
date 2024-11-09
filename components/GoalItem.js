import { Text, View, Pressable, Modal } from 'react-native';

const GoalItem = ({styles, itemData, deleteGoalHandler}) => {

    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} 
            onPress={deleteGoalHandler.bind(this, itemData.item.id)}
            style={({ pressed }) => pressed && styles.pressedItem}
            >
            <Text style={styles.goalText}>{itemData.item.text}</Text>
            </Pressable>
        </View>
    )
};

export default GoalItem;