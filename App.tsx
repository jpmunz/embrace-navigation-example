import React, {useEffect, useMemo, useState, useRef} from 'react';
import {NavigationContainer, useNavigationContainerRef} from "@react-navigation/native";
import RootStackNavigator from "@/RootStackNavigator";
import {useEmbrace} from "@embrace-io/react-native";
import {useEmbraceNativeTracerProvider} from "@embrace-io/react-native-tracer-provider";
import {EmbraceNavigationTracker} from "@embrace-io/react-native-navigation";

function App(): React.JSX.Element {
  const [fakeLoading, setFakeLoading] = useState<boolean>(true);
  const {isPending, isStarted} = useEmbrace({}) // just testing with an Android appID for now
  const {tracerProvider} = useEmbraceNativeTracerProvider({}, isStarted);

  const isReady = useMemo<boolean>(() => {
    if (!fakeLoading && isStarted) {
      return true;
    }

    if (!isPending && !isStarted) {
      console.log("Embrace SDK failed to start");
    }

    return false;
  }, [fakeLoading, isPending, isStarted])

  useEffect(() => {
    setTimeout(() => {
      setFakeLoading(false);
    }, 2000)
  }, []);


  // as of now if you inspect the source code of `useNavigationContainerRef` from `@react-navigation/native` you will see that it returns `navigation.current` instead of the entire shape of a reference
  const navigationRefVal = useNavigationContainerRef();

  // We need here the entire shape, so we re-create it and pass it down into the `ref` prop for the `EmbraceNavigationTracker` component.
  const navigationRef = useRef(navigationRefVal);

  return (
    <NavigationContainer ref={navigationRefVal}>
      {isReady && tracerProvider && (
        <EmbraceNavigationTracker
          debug
          ref={navigationRef}
          tracerProvider={tracerProvider}>
          <RootStackNavigator />
        </EmbraceNavigationTracker>
      )}
    </NavigationContainer>
  );
}

export default App;
