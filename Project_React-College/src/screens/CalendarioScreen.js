import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(null);
  const month = "March 2021";
  const daysInMonth = 31;
  const firstDayOfMonth = 1;

  const generateCalendar = () => {
    const weeks = [];
    let currentDay = 1;

    for (let week = 0; week < 5; week++) {
      const days = [];
      for (let day = 0; day < 7; day++) {
        if (week === 0 && day < firstDayOfMonth) {
          days.push(null);
        } else if (currentDay > daysInMonth) {
          days.push(null);
        } else {
          days.push(currentDay);
          currentDay++;
        }
      }
      weeks.push(days);
    }
    return weeks;
  };

  const calendarWeeks = generateCalendar();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CALENDÁRIO</Text>
        <Text style={styles.monthText}>{month}</Text>
      </View>

      <View style={styles.weekDays}>
        {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
          <Text key={index} style={styles.weekDayText}>
            {day}
          </Text>
        ))}
      </View>

      <View style={styles.daysContainer}>
        {calendarWeeks.map((week, weekIndex) => (
          <View key={weekIndex} style={styles.weekRow}>
            {week.map((day, dayIndex) => (
              <TouchableOpacity
                key={dayIndex}
                style={[
                  styles.day,
                  day === selectedDate ? styles.selectedDay : null,
                ]}
                onPress={() => setSelectedDate(day)}
                disabled={!day}
              >
                <Text
                  style={[
                    styles.dayText,
                    day === selectedDate ? styles.selectedDayText : null,
                  ]}
                >
                  {day || ""}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    color: '#E53935',
    fontSize: 20,
    fontWeight: 'bold',
  },
  monthText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  weekDayText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
    width: 40,
  },
  daysContainer: {
    flexDirection: 'column',
  },
  weekRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 2,
    backgroundColor: '#2D2D2D',
  },
  dayText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  selectedDay: {
    backgroundColor: '#E53935',
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
