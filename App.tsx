import React, {useEffect, useMemo, useState} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import RootStackNavigator from "@/RootStackNavigator";

function App(): React.JSX.Element {
  const [fakeLoading, setFakeLoading] = useState<boolean>(true);
  const isReady = useMemo<boolean>(() => !fakeLoading, [fakeLoading])

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false);
    }, 2000)
  }, []);


  return (
    <NavigationContainer>
      {isReady && (
        <RootStackNavigator />
      )}
    </NavigationContainer>
  );
}

export default App;
