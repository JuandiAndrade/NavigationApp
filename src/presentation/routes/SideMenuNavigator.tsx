import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { globalColors } from '../theme/theme';
import { View, Text, useWindowDimensions } from 'react-native';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/shared/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {

  const dimensions = useWindowDimensions();

  return (
    <Drawer.Navigator

    // componente especializado para darle estilos personalizados
    drawerContent={(props) => <CustomDrawerContent {...props} />}

    screenOptions={{
      headerShown: false,
      // drawerType: 'slide', // hace que se me corra todo cuando se abre el menu
      drawerType: dimensions.width >= 758 ? 'permanent' : 'front',

      drawerActiveBackgroundColor: globalColors.primary,
      drawerActiveTintColor: 'white',
      drawerInactiveTintColor: globalColors.primary,
      drawerItemStyle:{
        borderRadius: 100,
        paddingHorizontal:20,
      }
    }}
    >
      {/* <Drawer.Screen name="StackNavigator" component={StackNavigator} /> */}
      <Drawer.Screen options={{drawerIcon: ({color}) => (<IonIcon name='flash-outline' color={color}/>)}} name="Tabs" component={BottomTabsNavigator} />
      <Drawer.Screen options={{drawerIcon: ({color}) => (<IonIcon name='person-circle-outline' color={color}/>)}} name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}


const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View
      style = {{
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50,
      }}
      />


      <DrawerItemList {...props}/>
      {/* <Text>Hola mundo</Text> */}
    </DrawerContentScrollView>
  )
}