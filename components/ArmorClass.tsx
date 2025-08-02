import { ShieldIcon } from '@/assets/vector/ShieldIcon';
import { useCharacterStore } from '@/store/characterStore';
import { ViewStyleProps } from '@/styles/Views';
import { Button, Text, View } from 'react-native';



export default function ArmorClass() {
	const {AC, setAC} = useCharacterStore()
	return (
	<View style = {ViewStyleProps.centeredFlexColumn}>
		<Text style={{
			position: 'absolute', 
			color: "#000", 
			fontSize: 32, 
			zIndex: 1,
			top: 18
		}}>{AC}</Text>
		<ShieldIcon />
		<View style={ViewStyleProps.centeredFlexRow}>
			<Button title='+1' onPress={() => setAC(AC + 1)}/>
			<Button title='-1' onPress={() => setAC(AC - 1)}/>
		</View>
	</View>
	)
}