import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/Splash/splash';
import AuthStack from './stacks/authStack';
import MyTabs from './tabs/bottomtab';
import IMessaging from '../screens/phoneBank/iMessaging/iMessaging';
import NewEmail from '../screens/phoneBank/newEmail/newEmail';
import CanvassMaps from '../screens/canvass/canvassMaps/canvassMaps';

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyTabs"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuthStack"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BottomTab"
          component={MyTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
