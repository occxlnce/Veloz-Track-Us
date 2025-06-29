import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import React from 'react';
import { COLORS, FONTS } from '../constants/theme';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import TripScreen from './screens/TripScreen';
import VehicleScreen from './screens/VehicleScreen';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

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

// Create tab navigators for each sidebar item
function ReportsTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryBold,
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

function InvoicesTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryBold,
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

function DriverMonitoringTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryBold,
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

function ServiceLogsTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryBold,
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

function HelpSupportTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryBold,
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

function ProfileTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
        tabBarLabelStyle: {
          fontFamily: FONTS.primaryBold,
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
  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Jost-Regular': require('../assets/fonts/Jost-Regular.ttf'),
  });

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Drawer.Navigator 
      initialRouteName="Dashboard"
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
      <Drawer.Screen name="Dashboard" component={TabNavigator} options={{ title: 'Dashboard' }} />
      <Drawer.Screen name="Reports" component={ReportsTabNavigator} />
      <Drawer.Screen name="Invoices" component={InvoicesTabNavigator} />
      <Drawer.Screen name="Driver Monitoring" component={DriverMonitoringTabNavigator} />
      <Drawer.Screen name="Service Logs" component={ServiceLogsTabNavigator} />
      <Drawer.Screen name="Help & Support" component={HelpSupportTabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileTabNavigator} />
    </Drawer.Navigator>
  );
} 