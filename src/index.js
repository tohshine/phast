import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { ScrollView } from 'react-native'
import { StyleSheet, Text, View, } from 'react-native';
import { ListItem, } from 'react-native-elements'
import { connect, Provider, } from "react-redux"




import { getData } from './redux/action/getData'

const Index = ({ cats, getData }) => {

  useEffect(() => {
    getData()
  }, [])


  console.log(cats[0]);

  const data = () => {
    if (cats.length === 0) return <Text>Loading....</Text>
    return cats.map((cat) =>
      <ListItem key={cat._id} bottomDivider>

        <ListItem.Content>
          <ListItem.Title>{cat.type}</ListItem.Title>
          <ListItem.Subtitle>{cat.text}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>

    )
  }



  return (

    <View >
      <Text>CATS</Text>



      {data()}



    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToprops = (state) => {
  return {
    cats: state.cats
  }
}




export default connect(mapStateToprops, { getData })(Index)