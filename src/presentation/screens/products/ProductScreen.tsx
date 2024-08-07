import { RouteProp, useNavigation, useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { RookStackParams } from "../../routes/StackNavigator";
import { globalStyles } from "../../theme/theme";
import { useEffect } from "react";

export const ProductScreen = () => {

  const params = useRoute<RouteProp<RookStackParams, 'Product'>>().params; //Le digo que es la pantalla de Product
  console.log("--->", params)
  const navigation = useNavigation()

  useEffect(() => {

    navigation.setOptions({
      title: params.name
    })


  }, [])


  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Text style={{
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
      }}>
        {params.id} - {params.name}
      </Text>
    </View>
  )
}
