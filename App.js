import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './src/containers/Login/Login'
import Home from './src/containers/Home/Home';


const StackNavigater = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        headerShown: false,
      },
    },
    Home:{
      screen:Home
    }
  },
  {
    initialRouteName: 'Login',
  },
);

const Navigation = createAppContainer(
  createSwitchNavigator(
    {
      stacknavigation: StackNavigater,
    },

    {
      initialRouteName: 'stacknavigation',
    },
  ),
);

class App extends Component {
  render() {
    return (
        <Navigation
          ref={nav => {
            this.navigator = nav;
          }}
        />
      )
  }
};

export default App;
