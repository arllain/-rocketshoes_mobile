import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import colors from './styles/colors';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home: Home,
    },
    {
      initialRouteName: 'Home',
    },
    {
      defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: colors.dark,
        },
        headerTintColor: colors.light,
      },
    }
  )
);
export default Routes;
