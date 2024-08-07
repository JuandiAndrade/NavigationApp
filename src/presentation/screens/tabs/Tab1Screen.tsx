import { DrawerActions, useNavigation } from "@react-navigation/native"
import { useEffect } from "react";
import { Pressable, Text, View } from "react-native"
import { HamburgerMenu } from "../../components/HamburgerMenu";
import Icon from 'react-native-vector-icons/Ionicons';
import { IonIcon } from "../../components/shared/IonIcon";

export const Tab1Screen = () => {


  return (
    <View>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      {/* <Icon name="rocket-outline" size={100} /> */}
      <IonIcon name='rocket-outline'/>
    </View>
  )
}
