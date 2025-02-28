import React from 'react';
import {Button, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

function FirstScreen(): React.JSX.Element {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Text>FIRST SCREEN</Text>
      <Button title="Go to Second Screen" onPress={() => navigation.navigate('Second' as never)} />
    </View>
  );
}

export default FirstScreen;
