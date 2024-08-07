import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export const ProfileScreen = () => {


    // Para que no se vea arriba de todo el contenido, consologueando el top vamos a ver "desde donde se puede empezar a renderizar"

    // const insents = useSafeAreaInsets();
    const { top } = useSafeAreaInsets();

    const navigate = useNavigation ()


    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 20,
            marginTop: top + 20
        }}>
            <Text style={{marginBottom:10}}>ProfileScreen</Text>

            <PrimaryButton
                label='Abrir menú'
                onPress={() => navigate.dispatch(DrawerActions.toggleDrawer)}
            />
        </View>
    )
}
