import React from 'react';
import { StyleSheet, Text, View ,ImageBackground} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ImageBackground 
      source={{ uri: "https://i.pinimg.com/564x/72/8b/67/728b67eb2bd1d033816bf40c67dffcf0--ui-layout-list-design-layout.jpg" }}
      style={styles.container}>
        
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
