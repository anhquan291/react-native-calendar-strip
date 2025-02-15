/**
 * Created by bogdanbegovic on 8/26/16.
 */

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  //CALENDAR STYLES
  calendarContainer: {
    overflow: 'hidden',
  },
  datesStrip: {
    flex: 1,
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
  },
  calendarDates: {
    flex: 1,
    // flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  calendarHeader: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  icon: {
    resizeMode: 'contain',
  },

  //CALENDAR DAY
  dateRootContainer: {
    flex: 1,
  },
  dateContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  dateName: {
    textAlign: 'center',
  },
  weekendDateName: {
    color: '#A7A7A7',
    textAlign: 'center',
  },
  dateNumber: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  weekendDateNumber: {
    color: '#A7A7A7',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dot: {
    width: 5,
    height: 5,
    marginTop: 1,
    borderRadius: 3,
    opacity: 0,
  },

  // CALENDAR DOTS
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 2,
    // left: 5,
  },
  visibleDot: {
    opacity: 1,
    backgroundColor: 'blue',
  },
  selectedDot: {
    backgroundColor: 'blue',
  },

  // Calendar Lines
  line: {
    height: 4,
    marginTop: 3,
    borderRadius: 1,
    opacity: 0,
  },
  linesContainer: {
    justifyContent: 'center',
  },
  visibleLine: {
    opacity: 1,
    backgroundColor: 'blue',
  },
  selectedLine: {
    backgroundColor: 'blue',
  },
});
