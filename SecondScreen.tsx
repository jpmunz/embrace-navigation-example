import React from 'react';
import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function SecondScreen(): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>SECOND SCREEN</Text>
      <Button title="Go to First Screen" onPress={() => navigation.navigate('First' as never)} />
    </View>
  );
}

export default SecondScreen;
