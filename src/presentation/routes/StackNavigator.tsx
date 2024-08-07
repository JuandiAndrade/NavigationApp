import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductsScreen } from '../screens/products/ProductsScreen';
import { SettingsScreen } from '../screens/settings/SettingsScreen';
import { ProductScreen } from '../screens/products/ProductScreen';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';


export type RookStackParams = { //Puede ser type o interface es similar
    Home: undefined,
    Product: { id: number, name: string },
    Products: undefined,
    Settings: undefined,
}

const Stack = createStackNavigator<RookStackParams>(); //al createStackNavigator le estoy diciendo que va a ser de tipo RookStackParams (estoy definiendo el tipado)


export const StackNavigator = () => {

    const navigator = useNavigation();

    useEffect(() => {
      
    navigator.setOptions({
        headerShown: false,
    })
      
    }, [])
    

    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'trasnparent',
            }
        }}>
            {/* <Stack.Screen options={{
        // para ponerle mas opiones
      }} name="Home" component={HomeScreen} /> */}
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Products" component={ProductsScreen} />
            <Stack.Screen name="Product" component={ProductScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}