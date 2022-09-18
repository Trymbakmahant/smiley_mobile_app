import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Register from '../screens/Register';
import AppLoader from '../screens/loader';
import Home from '../screens/Home';
import {useLogin} from './authpro';
import {LoginContext} from '../context/logincontext';
import {useState} from 'react';
const Stack = createNativeStackNavigator();

function AppNav() {
  const {loginPending} = useLogin();
  const [dataofid, setdataofid] = useState({});

  return (
    <>
      <LoginContext.Provider values={{dataofid, setdataofid}}>
        <NavigationContainer independent={true}>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
        {loginPending ? <AppLoader /> : null}
      </LoginContext.Provider>
    </>
  );
}

export default AppNav;
