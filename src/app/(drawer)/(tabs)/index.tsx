import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Products() {
    return (
        <View style={styles.container}>
                    <Text style={styles.title}>Lista de Produtos</Text>

                    <TouchableOpacity onPress={() => router.navigate("/product/52")}>
                        <Text>Abrir Produto</Text>
                    </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: "#000",
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 8,
    }
})