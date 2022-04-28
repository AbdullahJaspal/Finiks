import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import PhoneHome from '../../screens/phoneBank/phoneHome/phoneHome';
import Accounts from '../../screens/home/accounts/accounts';
import UpdateVoterInfo from '../../screens/phoneBank/updateVoterInfo/updateVoterInfo';
import AddToTeam from '../../screens/phoneBank/addToTeam/addToTeam';
import SelectMessage from './../../screens/phoneBank/selectMessage/selectMessage';
import SelectEmail from '../../screens/phoneBank/selectEmail/selectEmail';
import SelectPhone from '../../screens/phoneBank/selectphone/selectPhone';

const PhoneStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator initialRouteName="SelectPhone">
      <stack.Screen
        name="SelectPhone"
        component={SelectPhone}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="PhoneHome"
        component={PhoneHome}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="SelectMessage"
        component={SelectMessage}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="AddToTeam"
        component={AddToTeam}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="SelectEmail"
        component={SelectEmail}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="UpdateVoterInfo"
        component={UpdateVoterInfo}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};
export default PhoneStack;
