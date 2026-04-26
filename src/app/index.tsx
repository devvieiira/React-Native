import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Index() {
    const signUp = () => {
        router.navigate("/signup")
    }
    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={signUp}>
                    <Text style={styles.label}>Criar conta</Text>
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
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#fff"
    },
    button: {
        backgroundColor: "#000",
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 8,
    }
})