import React, {useCallback, useEffect} from 'react';
import { StatusBar, StyleSheet, SafeAreaView } from 'react-native';

import { 
  useFonts, 
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import * as SplashScreen from 'expo-splash-screen'


import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular, 
    "MontserratBold": Montserrat_700Bold
  });
  
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fonteCarregada) {
      await SplashScreen.hideAsync();
    }
  }, [fonteCarregada]);

  if (!fonteCarregada) {
    return null;
  }

  return (
    <SafeAreaView style={ [style.container] } onLayout={onLayoutRootView}>
        <StatusBar barStyle={'dark-content'} />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})

