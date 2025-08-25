import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import DashboardScreen from '../screens/DashboardScreen';
import CareerRoadmapScreen from '../screens/CareerRoadmapScreen';
import GPSAttendanceScreen from '../screens/GPSAttendanceScreen';
import FaceIDAttendanceScreen from '../screens/FaceIDAttendanceScreen';
import ScheduleView from '../views/ScheduleView';

// Define stack navigator types
export type RootStackParamList = {
  Dashboard: undefined;
  CareerRoadmap: undefined;
  GPSAttendance: undefined;
  FaceIDAttendance: undefined;
  ScheduleView: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={DashboardScreen}
        />
        <Stack.Screen 
          name="CareerRoadmap" 
          component={CareerRoadmapScreen}
        />
        <Stack.Screen 
          name="GPSAttendance" 
          component={GPSAttendanceScreen}
        />
        <Stack.Screen 
          name="FaceIDAttendance" 
          component={FaceIDAttendanceScreen}
        />
        <Stack.Screen 
          name="ScheduleView" 
          component={ScheduleView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
