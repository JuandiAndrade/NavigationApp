import { useEffect } from "react";
import { Pressable, Text, View } from "react-native"
import { globalStyles } from "../../theme/theme"
import { type NavigationProp, useNavigation, DrawerActions } from "@react-navigation/native"
import { PrimaryButton } from '../../components/shared/PrimaryButton';
import type { RookStackParams } from "../../routes/StackNavigator";
import { HamburgerMenu } from "../../components/HamburgerMenu";

export const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RookStackParams>>();

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: () => (
  //       <Pressable onPress={ ()=> navigation.dispatch( DrawerActions.toggleDrawer)}>
  //         <Text>
  //           Menu
  //         </Text>
  //       </Pressable>
  //     )
  //   })
  // }, [])

  return (
    <View style={globalStyles.container}>

      {/* <Pressable
        onPress={() => navigation.navigate('Products' as never)}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Productos</Text>
      </Pressable> */}

      <HamburgerMenu />

      <PrimaryButton
        // onPress={() => navigation.navigate('Products' as never)}
        onPress={() => navigation.navigate('Products')}
        label="Productos"
      />

      <PrimaryButton
        // onPress={() => navigation.navigate('Settings' as never)}
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
      />




    </View>
  )
}
