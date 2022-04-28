import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import VoterDatabase from '../../screens/canvass/voterDatabase/voterDataBase';

const CanvassStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator initialRouteName="VoterDatabase">
      <stack.Screen
        name="VoterDatabase"
        component={VoterDatabase}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};
export default CanvassStack;
