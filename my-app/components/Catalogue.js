import { View, Text, FlatList, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function Catalogue() {
  return (
    <View>
      <Text style={styles.heading}>Categories</Text>
      <View>
        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <View style={styles.card}>
              <Text>Exercise </Text>
              <Text>Task 1</Text>
              <Image source={require("../Images/youngwomanworkingonline.png")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <View style={styles.card}>
              <Text>Study</Text>
              <Text>Task 2</Text>
              <Image source={require("../Images/young woman working at desk.png")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <View style={styles.card}>
              <Text>Code</Text>
              <Text>Task 3</Text>
              <Image source={require("../Images/coding.jpeg")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <View style={styles.card}>
              <Text>Cook</Text>
              <Text>Task 4</Text>
              <Image source={require("../Images/Cooking.jpeg")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <View style={styles.card}>
              <Text>Writing</Text>
              <Text>Task 5</Text>
              <Image source={require("../Images/writing.jpeg")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <View style={styles.card}>
              <Text>Hiking</Text>
              <Text>Task 6</Text>
              <Image source={require("../Images/Hiking.jpeg")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <View style={styles.card}>
              <Text>Drawing</Text>
              <Text>Task 7</Text>
              <Image source={require("../Images/Drawing.jpeg")}
                style={{ width: 200, height: 200 }}
              />
            </View>
            <View style={styles.card}>
              <Text>Meeting</Text>
              <Text>Task 8</Text>
              <Image source={require("../Images/Meeting.jpeg")}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left', // Align text to the left
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
