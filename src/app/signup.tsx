import { router, useLocalSearchParams } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
    const returnBack = () => {
        if(!router.canGoBack()) {
            return Alert.alert("Não é possível voltar")
        }
        router.back()
    }

    const { name } = useLocalSearchParams()
    return (
        <View style={styles.container}>
            {name && <Text>Olá, {name}</Text>}
            <TouchableOpacity style={styles.button} onPress={returnBack}>
                <Text style={styles.label}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#CECECE",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff",
    },
    button: {
        backgroundColor: "#000",
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 8,
    }
})