import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import api from '../services/api';

interface OptionPayload {
  text: string;
  score: number;
}

interface QuestionnairePayload {
  question: string;
  options: OptionPayload[];
}

export default function ResultScreen() {
  const answers = useSelector((state: RootState) => state.answers.answers);
  const [riskProfile, setRiskProfile] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const submitAnswers = async () => {
      const questionnairePayload: QuestionnairePayload[] = Object.entries(answers).map(([questionId, score]) => ({
        question: `Question ${questionId}`,
        options: [{ text: `Answer for Question ${questionId}`, score }]
      }));

      try {
        const response = await api.post('/questionnaire/submit', questionnairePayload);
        console.log('response', response)
        setRiskProfile(response.data.riskProfile);
      } catch (error) {
        console.error('Failed to submit answers:', error);
      } finally {
        setLoading(false);
      }
    };

    submitAnswers();
  }, [answers]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View>
          <Text style={styles.title}>Your Risk Profile</Text>
          <Text style={styles.category}>{riskProfile}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  category: { fontSize: 18 },
});
