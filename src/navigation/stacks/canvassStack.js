import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CanvassHome from '../../screens/canvass/canvassHome/canvassHome';
import CanvassListView from '../../screens/canvass/canvassListView/canvassListView';
import AddNewVoter from '../../screens/canvass/addNewVoter/addnewVoter';
import CanvassAccount from '../../screens/canvass/canvassAccount/canvassAccount';
import Walkbook from '../../screens/canvass/walkbook/walkbook';
import CanvassVoterDatabase from '../../screens/canvass/canvasVoterDatabase/canvasVoterDatabase';
import VoterDetail from '../../screens/canvass/voterDetail/voterDetail';
import MapSetting from '../../screens/canvass/mapSetting/mapSetting';
import CanvassMaps from '../../screens/canvass/canvassMaps/canvassMaps';

const CanvassStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator initialRouteName="CanvassHome">
      <stack.Screen
        name="CanvassHome"
        component={CanvassHome}
        options={{
          headerShown: false,
        }}
      />

      <stack.Screen
        name="AddNewVoter"
        component={AddNewVoter}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="CanvassAccount"
        component={CanvassAccount}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Walkbook"
        component={Walkbook}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="CanvassListView"
        component={CanvassListView}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="CanvassVoterDatabase"
        component={CanvassVoterDatabase}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="VoterDetail"
        component={VoterDetail}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="MapSetting"
        component={MapSetting}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="CanvassMaps"
        component={CanvassMaps}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};
export default CanvassStack;
