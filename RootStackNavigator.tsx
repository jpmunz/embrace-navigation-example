import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from "@/FirstScreen";
import SecondScreen from "@/SecondScreen";

const RootStack = createStackNavigator();

const defaultScreensGroup = (Stack: typeof RootStack) => {
  return (
    <Stack.Group>
      <Stack.Screen key="first" name="First" component={FirstScreen} />
      <Stack.Screen key="second" name="Second" component={SecondScreen} />
    </Stack.Group>
  )
}

function RootStackNavigator(): React.JSX.Element {

  const renderStack = () => {
    return defaultScreensGroup(RootStack);
  }

  return (
    <RootStack.Navigator>
      {renderStack()}
    </RootStack.Navigator>
  );
}

export default RootStackNavigator;
