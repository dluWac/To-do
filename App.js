import React from "react";
import { View, Text, SafeAreaView, LogBox} from 'react-native'
import Counter from "./src/screens/counter/counter";
import ToDo from './src/screens/ToDoApp'
import Navigator from './src/navigation/navigation'


const App = () => {
  LogBox.ignoreAllLogs()
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <Counter /> */}
      {/* <ToDo /> */} 
      <Navigator/>
    </SafeAreaView>
  )
}

export default App