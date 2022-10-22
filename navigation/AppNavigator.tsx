import {
    DarkTheme,
    DefaultTheme,
    NavigationContainer,
  } from "@react-navigation/native"
  import { createNativeStackNavigator } from "@react-navigation/native-stack"
  import { StackScreenProps } from "@react-navigation/stack"
  import { observer } from "mobx-react-lite"
  import React from "react"
  import Config from '../config'
  import { navigationRef, useBackButtonHandler } from "./navigation-utilities"
  import { useColorScheme } from "react-native"
  import Home from "../screens/HomeScreen"
  import { Item } from '../interface/Video';
  import Video from "../screens/video/Video"
  import Profile from "../screens/video/perfil"

  export type AppStackParamList = {
    Home: undefined,
    Video: Item,
    Profile: Item,
  }
  const exitRoutes = Config.exitRoutes
  
  export type AppStackScreenProps<T extends keyof AppStackParamList> = StackScreenProps<
    AppStackParamList,
    T
  >
  
  // Documentation: https://reactnavigation.org/docs/stack-navigator/
  const Stack = createNativeStackNavigator<AppStackParamList>()
  
  const AppStack = observer(function AppStack() {
    return (
      <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerShown: true,
          headerTitleAlign: 'left',
          headerStyle: {
              backgroundColor: '#1b1c1e',
          },
          headerTintColor: 'white',
      }}>
          <Stack.Screen name="Home" component={Home} options={{
              title: 'Youtube',
              headerTitleAlign: 'left',
              headerTintColor: 'white',
          }} />
  
          <Stack.Screen name="Video" component={Video} options={{
              headerTintColor: 'white',
          }}/>
  
          <Stack.Screen name="Profile" component={Profile} options={{
              headerTintColor: 'white',
          }}/>
  
  
        {/** 🔥 Your screens go here */}
      </Stack.Navigator>
    )
  })
  
  interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
  
  export const AppNavigator = observer(function AppNavigator(props: NavigationProps) {
    const colorScheme = 'dark'
  
    useBackButtonHandler((routeName) => exitRoutes.includes(routeName))
  
    return (
      <NavigationContainer
        ref={navigationRef}
        theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        {...props}
      >
        <AppStack />
      </NavigationContainer>
    )
  })