import * as React from 'react';
import Routes from './assets/navigator/routes';
import AuthProvider from './assets/navigator/authpro';


function App() {
  return(
    <AuthProvider>
        <Routes/>
    </AuthProvider>
  );
}

export default App;
