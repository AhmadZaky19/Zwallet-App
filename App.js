import React from 'react';
import 'react-native-gesture-handler';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import configureStore from './src/Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import * as color from './src/Styles/ColorStyles';

import Login from './src/Screens/Login';
import Register from './src/Screens/Register';
import CreatePin from './src/Screens/CreatePin';
import CreatePinSuccess from './src/Screens/CreatePinSuccess';
import ResetPassEmail from './src/Screens/ResetPassEmail';
import ResetPassword from './src/Screens/ResetPassword';
import Home from './src/Screens/Home';
import History from './src/Screens/History';
import FindReceiver from './src/Screens/FindReceiver';
import AmountInput from './src/Screens/AmountInput';
import TransferConfirmation from './src/Screens/TransferConfirmation';
import PinConfirmation from './src/Screens/PinConfirmation';
import TransferDetail from './src/Screens/TransferDetail';
import Profile from './src/Screens/Profile';
import PersonalInfo from './src/Screens/PersonalInfo';
import AddPhoneNumber from './src/Screens/AddPhoneNumber';
import ChangePassword from './src/Screens/ChangePassword';
import ResetPassOtp from './src/Screens/ResetPassOtp';

import SplashScreen from './src/Screens/SplashScreen';

const { persistor, store } = configureStore();

const Stack = createStackNavigator();

const headerStyle = {
  // header white
  headerStyleWhite: {
    backgroundColor: color.backgroud,
    elevation: 0,
    height: 80,
  },
  headerTintColorWhite: color.dark,
  // header primary color
  headerStyleBlue: {
    backgroundColor: color.primary,
    elevation: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 80,
  },
  headerTintColorBlue: color.white,
};

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="History" component={History} options={{
              headerStyle: headerStyle.headerStyleBlue,
              headerTintColor: headerStyle.headerTintColorBlue,
            }} />
            <Stack.Screen name="FindReceiver" component={FindReceiver} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Find Receiver',
            }} />
            <Stack.Screen name="AmountInput" component={AmountInput} options={{
              headerStyle: {
                backgroundColor: color.primary,
                elevation: 0,
                height: 80,
              },
              headerTintColor: color.white,
              title: 'Transfer',
            }} />
            <Stack.Screen name="TransferConfirmation" component={TransferConfirmation} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Confirmation',
            }} />
            <Stack.Screen name="PinConfirmation" component={PinConfirmation} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Enter Your PIN',
            }} />
            <Stack.Screen name="TransferDetail" component={TransferDetail} options={{
              headerStyle: headerStyle.headerStyleBlue,
              headerTintColor: headerStyle.headerTintColorBlue,
              title: 'Transfer Details',
            }} />
            <Stack.Screen name="Profile" component={Profile} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: '',
            }} />
            <Stack.Screen name="PersonalInfo" component={PersonalInfo} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Personal Information',
            }} />
            <Stack.Screen name="AddPhoneNumber" component={AddPhoneNumber} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Add Phone Number',
            }} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{
              headerStyle: headerStyle.headerStyleWhite,
              headerTintColor: headerStyle.headerTintColorWhite,
              title: 'Change Password',
            }} />
            <Stack.Screen name="CreatePin" component={CreatePin} options={{ headerShown: false }} />
            <Stack.Screen name="CreatePinSuccess" component={CreatePinSuccess} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassEmail" component={ResetPassEmail} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassOtp" component={ResetPassOtp} options={{ headerShown: false }} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
