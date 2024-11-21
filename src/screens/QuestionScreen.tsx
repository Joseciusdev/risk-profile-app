import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../navigation/AppNavigator';
import { setAnswer } from '../redux/answersSlice';
import questions from '../data/questions';

type QuestionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Question'>;
type QuestionScreenRouteProp = RouteProp<RootStackParamList, 'Question'>;

type Props = {
  navigation: QuestionScreenNavigationProp;
  route: QuestionScreenRouteProp;
};

export default function QuestionScreen({ navigation, route }: Props) {
  const { questionIndex = 0 } = route.params || {};
  const question = questions[questionIndex];
  const dispatch = useDispatch();

  const handleAnswer = (score: number) => {
    dispatch(setAnswer({ questionId: question.id, score }));

    if (questionIndex + 1 < questions.length) {
      navigation.push('Question', { questionIndex: questionIndex + 1 });
    } else {
      navigation.navigate('Result');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{question.question}</Text>
      {question.options.map((option) => (
        <TouchableOpacity key={option.id} style={styles.option} onPress={() => handleAnswer(option.score)}>
          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  question: { fontSize: 20, marginBottom: 20 },
  option: { padding: 15, backgroundColor: '#e0e0e0', marginVertical: 10 },
});
