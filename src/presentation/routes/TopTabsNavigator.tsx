import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { AboutScreen } from '../screens/about/AboutScreen';
import { HamburgerMenu } from '../components/HamburgerMenu';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <>
        <HamburgerMenu />
            <Tab.Navigator>
                <Tab.Screen name="Prefil" component={ProfileScreen} />
                <Tab.Screen name="Settings" component={AboutScreen} />
            </Tab.Navigator>
        </>
    );
}