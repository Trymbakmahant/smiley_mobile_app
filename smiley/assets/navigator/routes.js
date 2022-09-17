import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext, useLogin } from './authpro';
import auth from'@react-native-firebase/auth';
import AppNav from './appnav';
import Navigation from './navigation';


function Routes() {
    const {user, setUser} = React.useContext(AuthContext);
    const [initializing, setInitializing] = React.useState(true);
    const {setLoginPending} = useLogin();

    const onAuthStateChanged = (user) => {
        setUser(user);
        if(initializing) setInitializing(false);
    }

    React.useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber;
    }, [])

    if (initializing) return null;

    return(
        <NavigationContainer independent={true}>
            { user ? <Navigation/> : <AppNav/> }
            { user ? setLoginPending(false) : null }
        </NavigationContainer>
    );
}


export default Routes;
