import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../navigation/AppNavigator';
import { setAnswer } from '../redux/answersSlice';
import api from '../services/api';

type QuestionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Question'>;
type QuestionScreenRouteProp = RouteProp<RootStackParamList, 'Question'>;

type Props = {
  navigation: QuestionScreenNavigationProp;
  route: QuestionScreenRouteProp;
};

interface Option {
  id: string;
  text: string;
  score: number;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
}

export default function QuestionScreen({ navigation, route }: Props) {
  const { questionIndex = 0 } = route.params || {};
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await api.get<Question[]>('/questionnaire');
        setQuestions(response.data);
      } catch (error) {
        console.error('Failed to fetch questions:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

  if (loading) {
    return (
      <View style={styles.indicatorContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const question = questions[questionIndex];
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
  indicatorContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  question: { fontSize: 20, marginBottom: 20 },
  option: { padding: 15, backgroundColor: '#e0e0e0', marginVertical: 10 },
});
