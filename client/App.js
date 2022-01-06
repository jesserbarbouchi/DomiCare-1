import React from 'react'
import Footer from "./components/footer.js"
import Router from "./router.js"
import {StyleSheet}from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { Calendar } from 'react-native-calendario';


export default function App() {
   import { MultiDateSelectionCalendar, DefaultTheme } from 'react-native-easy-calendar'
   import frenchLocale from 'dayjs/locale/fr';
   
   const Example = () => {
     const [selectedDates, setSelectedDates] = React.useState<string[]>([]);
     const [selectedDates, setSelectedDates] = React.useState<string[]>(['2020-01-01']); // Also possible
   
   
     const setMaxNumberOfSelectedDates = React.useCallback((_selectedDates: string[]) => {
       const MAX_DATES = 3;
       if (_selectedDates.length <= MAX_DATES) {
         setSelectedDates(_selectedDates)
       }
     })
   
     return (
       <MultiDateSelectionCalendar
         {/* The following props are optional */}
         disabledDates={['2020-01-01', '2020-03-04']}
         initVisibleDate={'2020-02-10'} // defaults to current date
         minDate={'2020-01-10'};
         maxDate={'2020-04-10'};
         allowYearView={true};
         showExtraDates={false};
         testID={'my-calendar-component'};
         locale={frenchLocale}; // defaults to en-CA
         theme={DefaultTheme};
         {/* The following props are required */}
         onSelectDates={setMaxNumberOfSelectedDates}
         selectedDates={selectedDates}
       />
     );
   };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});