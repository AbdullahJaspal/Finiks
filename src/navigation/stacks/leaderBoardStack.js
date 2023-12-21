import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LeaderboardHome from '../../screens/leaderboard/leaderboardHome/leaderboardHome';
import Criteria from '../../screens/leaderboard/criteria/criteria';
import Timeline from '../../screens/leaderboard/timeline/timeline';
import AddToTeam from '../../screens/phoneBank/addToTeam/addToTeam';

const LeaderboardStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator initialRouteName="LeaderboardHome">
      <stack.Screen
        name="LeaderboardHome"
        component={LeaderboardHome}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Criteria"
        component={Criteria}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Timeline"
        component={Timeline}
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
    </stack.Navigator>
  );
};
export default LeaderboardStack;
