import React from 'react';
import { View, Text, Image , StyleSheet , TextInput} from 'react-native';
import Person from '../Images/person.png';
import filter from '../Images/Filter.png';

export default function Navbar() {
  return (
   <>
    <View  style = {styles.container}>
        <View >
            <Text style = {styles.text}>Hello, Devs</Text>
            <Text style = {styles.smallT}>14 tasks today</Text>

        </View>
        <View style={styles.personContainer}>
          <Image source={Person} style={styles.personImage} />
        </View>
    </View>
    <View style = {{flexDirection : "row" , gap: 50} }> 
      <TextInput placeholder='search' style = {{borderWidth : 1, height :50, width : 250, marginLeft: 30 , borderRadius: 20, backgroundColor: 'white'}}/>
      <Image source={filter} style = {{marginLeft: -30}}/>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20
  },
  text:{
    fontSize: 30,
  },
  smallT :{
    fontSize : 12,
  },
  personContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
  },
  personImage: {
    width: 40,
    height: 40,
  },
});
