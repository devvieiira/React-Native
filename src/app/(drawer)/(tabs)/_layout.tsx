import { MaterialIcons } from "@expo/vector-icons"
import { Tabs } from "expo-router"

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false }} >
            <Tabs.Screen name="index" 
            options={
                { tabBarLabel: "Produtos", 
                tabBarIcon: ({ color, size }) => <MaterialIcons name="store" size={size} color={color} /> }} />
            <Tabs.Screen name="order" options={{
                tabBarLabel: "Detalhe Pedidos",
                tabBarIcon: ({ color, size }) => <MaterialIcons name="receipt" size={size} color={color} />
            }} />
            <Tabs.Screen name="product" options={{
                tabBarButton: () => null,
            }} />
        </Tabs>
    )
}