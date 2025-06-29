import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { COLORS, FONTS } from '../../constants/theme';
import DashboardScreen from '../screens/DashboardScreen';
import DriverMonitoringScreen from '../screens/DriverMonitoringScreen';
import HelpSupportScreen from '../screens/HelpSupportScreen';
import HomeScreen from '../screens/HomeScreen';
import InvoicesScreen from '../screens/InvoicesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ReportsScreen from '../screens/ReportsScreen';
import ServiceLogsScreen from '../screens/ServiceLogsScreen';
import SettingsScreen from '../screens/SettingsScreen';
import TripScreen from '../screens/TripScreen';
import VehicleScreen from '../screens/VehicleScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false, // Important: This hides the duplicate header
        tabBarActiveTintColor: COLORS.primary, // Orange for active icon/label
        tabBarInactiveTintColor: COLORS.gray, // Gray for inactive icon/label
        tabBarStyle: {
          backgroundColor: COLORS.white, // White background for the tab bar
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryBold, // Using Poppins-Bold font
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Trip" component={TripScreen} />
      <Tab.Screen name="Vehicle" component={VehicleScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <Drawer.Navigator 
      initialRouteName="Tabs"
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.secondary, // Navy Blue Header
        },
        headerTintColor: COLORS.white, // White Hamburger Icon & Title
        drawerActiveTintColor: COLORS.primary, // Orange for active link text
        drawerInactiveTintColor: COLORS.secondary, // Navy for inactive link text
        drawerActiveBackgroundColor: 'rgba(255, 111, 0, 0.1)', // Very light orange background for the active link
      }}
    >
      <Drawer.Screen name="Tabs" component={TabNavigator} options={{ title: 'Home' }} />
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Reports" component={ReportsScreen} />
      <Drawer.Screen name="Invoices" component={InvoicesScreen} />
      <Drawer.Screen name="Driver Monitoring" component={DriverMonitoringScreen} />
      <Drawer.Screen name="Service Logs" component={ServiceLogsScreen} />
      <Drawer.Screen name="Help & Support" component={HelpSupportScreen} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
} 