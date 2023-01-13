import {
  StyleSheet,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerMode: 'screen',
      }}
      >
        <Stack.Screen 
          options={{ 
            headerShown: false 
          }}
          name="Login" 
          component={LoginScreen}
        />
        <Stack.Screen 
          options={{ 
            headerTitle: 'Anonymous Login',
            headerTitleAlign: 'center',
            headerBackTitleVisible: false,
            headerStyle: {
              backgroundColor: '#444444',
            },
            headerTintColor: '#ffffff',
            headerLeft: null 
          }}
        name="Home" 
        component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
