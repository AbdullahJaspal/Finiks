import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ChatHome from '../../screens/chat/chatHome/chatHome';
import Conversation from '../../screens/chat/conversation/conversation';

const ChatStack = () => {
  const stack = createStackNavigator();
  return (
    <stack.Navigator initialRouteName="ChatHome">
      <stack.Screen
        name="ChatHome"
        component={ChatHome}
        options={{
          headerShown: false,
        }}
      />
      <stack.Screen
        name="Conversation"
        component={Conversation}
        options={{
          headerShown: false,
        }}
      />
    </stack.Navigator>
  );
};
export default ChatStack;
