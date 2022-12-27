import { SignIn } from '@pages/index';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

export type StackParamList = {
  Home: undefined;
  SignIn: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
  RecoverPassword: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();

function PublicRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default PublicRoutes;
