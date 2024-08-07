import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { View, Text } from 'react-native'
import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
import { BottomTabsNavigator } from './presentation/routes/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <SideMenuNavigator/>
      {/* <BottomTabsNavigator /> */}
    </NavigationContainer>
  )
}

// ubo problema cuando puse SideMenu, rompia y suele pasar, entonces para solucionarlo:
// $ npx react-native start --resetCache
//  creo que es porque queda colgada del anterior
// plugins: ['react-native-reanimated/plugin'], ---> pegue el comando en babel porque seguia el error