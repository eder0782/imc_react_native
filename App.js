// import { StatusBar } from 'expo-status-bar';
import { StyleSheet,StatusBar, Text, View } from 'react-native';
import Main from './components/Main';
import TextInputExample from './teste';

export default function App() {
  return (
    <View >
       <StatusBar
        animated={true}
        backgroundColor="#e32551"
        barStyle="default"
        showHideTransition="fade"
        // hidden={false}
      />
      <Main/>     
    </View>
  );
}

