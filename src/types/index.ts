// Common types for the Mobile Staff app

export interface User {
  id: string;
  name: string;
  avatar?: string;
  role: string;
}

export interface Shift {
  id: string;
  startTime: string;
  endTime: string;
  date: string;
  status: 'scheduled' | 'in-progress' | 'completed' | 'cancelled';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

export interface Statistics {
  totalShifts: number;
  completedShifts: number;
  totalHours: number;
  averageRating: number;
}
