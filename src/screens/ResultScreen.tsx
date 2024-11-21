import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { calculateScore } from '../redux/answersSlice';

export default function ResultScreen() {
  const dispatch = useDispatch();
  const totalScore = useSelector((state: RootState) => state.answers.totalScore);

  useEffect(() => {
    dispatch(calculateScore());
  }, [dispatch]);

  const getRiskProfile = (score: number): string => {
    if (score <= 7) return 'Low Risk';
    if (score <= 12) return 'Medium Risk';
    return 'High Risk';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Risk Profile</Text>
      <Text style={styles.score}>Score: {totalScore}</Text>
      <Text style={styles.category}>{getRiskProfile(totalScore)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold' },
  score: { fontSize: 20, marginVertical: 10 },
  category: { fontSize: 18 },
});
