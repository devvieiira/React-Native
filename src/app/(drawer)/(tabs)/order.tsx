import { StyleSheet, Text, View } from 'react-native';

export default function Order() {

    return (
        <View style={styles.container}>
                    <Text style={styles.title}>Detalhes do Produto</Text>
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