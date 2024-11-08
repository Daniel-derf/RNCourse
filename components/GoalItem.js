import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

const GoalItem = ({styles, itemData}) => {
    return (
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{itemData.item}</Text>
      </View>
    )
};

export default GoalItem;