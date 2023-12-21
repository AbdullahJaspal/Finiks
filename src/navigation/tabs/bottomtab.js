import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements';
import HomeStack from '../stacks/homeStack';
import {Text} from 'react-native';
import SelectPhone from '../../screens/phoneBank/selectphone/selectPhone';
import PhoneStack from '../stacks/phoneStack';
import VoterDatabase from '../../screens/canvass/voterDatabase/voterDataBase';
import CanvassStack from '../stacks/canvassStack';
import LeaderboardStack from '../stacks/leaderBoardStack';
import ChatStack from '../stacks/chatStack';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={'home'}
              type={'font-awesome'}
              color={focused ? '#D12E2F' : '#717171'}
              size={size}
            />
          ),
          title: 'Chat',
          tabBarLabel: ({focused}) => {
            let label;
            return (label = focused ? (
              <Text style={{fontSize: 10, color: '#717171'}}>{'Home'}</Text>
            ) : null);
          },
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={'wechat'}
              type={'font-awesome'}
              color={focused ? '#D12E2F' : '#717171'}
              size={size}
            />
          ),
          title: 'Chat',
          tabBarLabel: ({focused}) => {
            let label;
            return (label = focused ? (
              <Text style={{fontSize: 10, color: '#717171'}}>{'Chat'}</Text>
            ) : null);
          },
        }}
      />

      <Tab.Screen
        name="LeaderBoard"
        component={LeaderboardStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={'graph-bar'}
              type={'foundation'}
              color={focused ? '#D12E2F' : '#717171'}
              size={size}
            />
          ),
          title: 'Chat',
          tabBarLabel: ({focused}) => {
            let label;
            return (label = focused ? (
              <Text style={{fontSize: 10, color: '#717171'}}>
                {'Leader Board'}
              </Text>
            ) : null);
          },
        }}
      />

      <Tab.Screen
        name="PhoneBanking"
        component={PhoneStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={'phone'}
              type={'entypo'}
              color={focused ? '#D12E2F' : '#717171'}
              size={size}
            />
          ),
          tabBarLabel: ({focused}) => {
            let label;
            return (label = focused ? (
              <Text style={{fontSize: 10, color: '#D12E2F'}}>
                {'Phone Banking'}
              </Text>
            ) : null);
          },
          tabBarLabelStyle: {
            color: '#D12E2F',
          },
        }}
      />

      <Tab.Screen
        name="CanvassStack"
        component={CanvassStack}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <Icon
              name={'location-pin'}
              type={'entypo'}
              color={focused ? '#D12E2F' : '#717171'}
              size={size}
            />
          ),
          tabBarLabel: ({focused}) => {
            let label;
            return (label = focused ? (
              <Text style={{fontSize: 10, color: '#717171'}}>{'Canvass'}</Text>
            ) : null);
          },
          tabBarLabelStyle: {
            color: '#D12E2F',
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;
