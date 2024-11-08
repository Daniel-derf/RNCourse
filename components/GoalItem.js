import { Text, View, Pressable } from 'react-native';

const GoalItem = ({styles, itemData, deleteGoalHandler}) => {

    return (
    <Pressable onPress={deleteGoalHandler.bind(this, itemData.item.id)}>
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item.text}</Text>
    </View>
    </Pressable>
    )
};

export default GoalItem;