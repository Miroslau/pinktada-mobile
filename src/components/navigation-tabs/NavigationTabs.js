import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Text, View, Image, Platform,
} from 'react-native';
import publicRoutes from '../../routes';
import { TabBarStyle, NavigationTabsStyle } from './NavigationTabsStyle';
import { colorVariables } from '../../constants/colorVariables';

const Tab = createBottomTabNavigator();

const {
  colorWhite, colorAmaranth, colorJuniper, colorPersianIndigo,
} = colorVariables;

const NavigationTabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? colorPersianIndigo : colorWhite,
      },
      headerTintColor: Platform.OS === 'android' ? colorWhite : colorPersianIndigo,
      tabBarStyle: TabBarStyle,
      tabBarHideOnKeyboard: true,
    }}
  >
    {
      publicRoutes.map((route) => (
        <Tab.Screen
          key={route.id}
          name={route.name}
          component={route.Component}
          options={{
            unmountOnBlur: true,
            // eslint-disable-next-line react/no-unstable-nested-components
            tabBarIcon: ({ focused }) => (
              <View style={NavigationTabsStyle.tabScreen}>
                <Image
                  source={route.icon}
                  resizeMode="contain"
                  style={{
                    ...NavigationTabsStyle.imageStyle,
                    tintColor: focused ? colorAmaranth
                      : colorJuniper,
                  }}
                />
                <Text style={{
                  ...NavigationTabsStyle.textStyle,
                  color: focused ? colorAmaranth
                    : colorJuniper,
                }}
                >
                  {route.title}
                </Text>
              </View>
            ),
            title: (
              <View style={NavigationTabsStyle.headerContainer}>
                <Image
                  style={NavigationTabsStyle.imageLogo}
                  source={require('../../../assets/icons/logo.png')}
                />
                <Text style={NavigationTabsStyle.headerText}>PINKTADA</Text>
              </View>
            ),
          }}
          listeners={({ navigation }) => ({
            blur: () => navigation.setParams({ screen: undefined }),
          })}
        />
      ))
    }
  </Tab.Navigator>
);

export default NavigationTabs;
