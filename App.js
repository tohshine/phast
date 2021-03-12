
import React from "react";
import { StyleSheet,View } from "react-native";
import Index from "./src/index";

//import { SafeAreaView } from "react-Index";
import { SafeAreaView } from "react-native-safe-area-context";


import { Provider } from "react-redux";
import { store } from "./src/redux/store";


const App = () => {
  return (
    <Provider store={store}>
     <SafeAreaView style={styles.container}>
       
        <Index />

      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;