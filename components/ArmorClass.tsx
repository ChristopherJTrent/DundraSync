import { useCharacterStore } from '@/store/characterStore';
import { ViewStyleProps } from '@/styles/Views';
import { Button, Text, View } from 'react-native';



export default function ArmorClass() {
	const {AC, setAC} = useCharacterStore()
	return (
	<View style = {ViewStyleProps.centeredFlexColumn}>
		<Text>Armor Class: {AC}</Text>
		<View style={ViewStyleProps.centeredFlexRow} >
			<Button title='+1' onPress={() => setAC(AC + 1)}/>
			<Button title='-1' onPress={() => setAC(AC - 1)}/>
		</View>
	</View>
	)
}