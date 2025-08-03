import { useCharacterStore } from "@/store/characterStore";
import { Text, View } from "react-native";

export function HealthWidget() {
    const {
        Health,
        TemporaryHealth,
        setHealth,
        setTemporaryHealth
    } = useCharacterStore()

    return <View>
        <Text>{Health}+{TemporaryHealth}</Text>
    </View>
}