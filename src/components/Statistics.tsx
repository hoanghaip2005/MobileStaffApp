import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Statistics as StatisticsType } from '../types';

interface StatisticsProps {
  data: StatisticsType;
}

export function Statistics({ data }: StatisticsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Thống kê</Text>
      <View style={styles.statsGrid}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{data.totalShifts}</Text>
          <Text style={styles.statLabel}>Tổng ca</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{data.completedShifts}</Text>
          <Text style={styles.statLabel}>Đã hoàn thành</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{data.totalHours}h</Text>
          <Text style={styles.statLabel}>Tổng giờ</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{data.averageRating}</Text>
          <Text style={styles.statLabel}>Đánh giá TB</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statItem: {
    width: '48%',
    alignItems: 'center',
    marginBottom: 16,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#007D7D',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
