// import { MaterialIcons } from "@expo/vector-icons"
// import { Tabs } from "expo-router"

// export default function Layout() {
//     return (
//         // <Stack screenOptions={{ headerShown: false }}/>
//         <Tabs screenOptions={{ headerShown: false }} >
//             <Tabs.Screen name="index"  options={{
//                 tabBarLabel: "Home",
//                 tabBarIcon: ({color}) => <MaterialIcons name="home" size={24} color={color} />
//                 // {color}: pega a cor padrão do tema, e adiciona no icone (se estiver ou não selecionado)
//             }}/>
//             <Tabs.Screen name="signup"  options={{
//                 tabBarLabel: "Sign Up",
//                 tabBarIcon: ({color}) => <MaterialIcons name="person-add" size={24} color={color} />
//             }} />
//         </Tabs>
//     )
// }

import { Stack } from "expo-router";

export default function Layout() {
    return (
        // <GestureHandlerRootView style={{ flex: 1 }}>
        //     <Drawer screenOptions={{headerShown: false}}>
        //         <Drawer.Screen name="index" 
        //         options={{
        //             drawerLabel: "Home",
        //             drawerIcon: ({color}) => <MaterialIcons name="home" size={24} color={color} />

        //         }} />
        //         <Drawer.Screen name="signup"
        //             options={{
        //                 drawerLabel: "Criar conta",
        //                 drawerIcon: ({ color }) => <MaterialIcons name="person" size={24} color={color} />

        //             }} />
        //     </Drawer>
        // </GestureHandlerRootView>
        <Stack />
    );
}