import { Text, View } from "react-native"
import { globalStyles } from "../../theme/theme";
import { FlatList } from "react-native-gesture-handler";
import { PrimaryButton } from "../../components/shared/PrimaryButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { type RookStackParams } from "../../routes/StackNavigator"; //lo puse yo al type, es opcional


const products = [
  { id: 1, name: 'Producto 1' },
  { id: 2, name: 'Producto 2' },
  { id: 3, name: 'Producto 3' },
  { id: 4, name: 'Producto 4' },
  { id: 5, name: 'Producto 5' },
  { id: 6, name: 'Producto 6' },
];


export const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RookStackParams>>();


  return (
    <View style={globalStyles.container}>
      <Text style={{ marginBottom: 10, fontSize: 30 }}>Productos</Text>
      <FlatList
        data={products}
        // renderItem={ (data) => (
        renderItem={({ item }) => (
          <PrimaryButton
            // onPress={() => navigation.navigate('Product' as never)} --> como ya defini el tipo en StackNavigator entoces puedo sacar el never
            onPress={() => navigation.navigate('Product', {id: item.id, name: item.name})} 
            label={item.name}
          />
        )}
      />


      <Text style={{ marginBottom: 10, fontSize: 30 }}>Ajustes</Text>

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Ajustes"
      />

    </View>
  )
}
