import React from 'react';
import {
  BottomTabNavigationProp,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import Setting from '@/screens/setting/Setting';
import { colors, mainBottomTabNavigationLists } from '@/constants';
import Map from '@/screens/map/Map';
import Home from '@/screens/home/Home';
import CustomIcon from '@/components/common/CustinIcons';

type mainBottomTabNavigationProps = {
  [mainBottomTabNavigationLists.HOME]: undefined;
  [mainBottomTabNavigationLists.MAP]: undefined;
  [mainBottomTabNavigationLists.SETTING]: undefined;
};

export type MainBottomTabNavigationProps =
  BottomTabNavigationProp<mainBottomTabNavigationProps>;

const BottomTab = createBottomTabNavigator<mainBottomTabNavigationProps>();

function MainBottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.background.secondary,
          borderTopWidth: 0.5,
          borderTopColor: colors.border.default,
          height: 64,
          paddingBottom: 20,
          paddingHorizontal: 16,
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarActiveTintColor: colors.text.primary,
        tabBarInactiveTintColor: colors.text.tertiary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        tabBarIconStyle: {
          marginTop: 4,
        },
        tabBarShowLabel: false,
      }}>
      <BottomTab.Screen
        name={mainBottomTabNavigationLists.HOME}
        component={Home}
        options={{
          tabBarIcon: CustomIcon('home-outline'),
        }}
      />
      <BottomTab.Screen
        name={mainBottomTabNavigationLists.MAP}
        component={Map}
        options={{
          tabBarIcon: CustomIcon('map-outline'),
        }}
      />
      <BottomTab.Screen
        name={mainBottomTabNavigationLists.SETTING}
        component={Setting}
        options={{
          tabBarIcon: CustomIcon('settings-outline'),
        }}
      />
    </BottomTab.Navigator>
  );
}

export default MainBottomTabNavigation;
