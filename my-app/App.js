import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navbar from "../my-app/components/Navbar"
import List from  "../my-app/components/List"
import Catalogue from "../my-app/components/Catalogue"

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      <Catalogue/>
      <List/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    
    backgroundColor: '#f7f0e8',
    
  },
});
