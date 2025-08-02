import { ShieldIcon } from '@/assets/vector/ShieldIcon';
import { useCharacterStore } from '@/store/characterStore';
import { mergeStyles } from '@/styles/util';
import { ViewStyles } from '@/styles/Views';
import Lucide from '@react-native-vector-icons/lucide';
import { useState } from 'react';
import { Button, Text, View, TouchableHighlight, Modal, TextInput} from 'react-native';



export default function ArmorClass() {
	const {AC, setAC} = useCharacterStore()
	const [modalOpen, setModalOpen] = useState(false)
	const [number, setNumber] = useState('')
	return (
	<View style = {mergeStyles(
		ViewStyles.flexColumn, 
		ViewStyles.justifyCenter, 
		ViewStyles.alignCenter,
		{
			height: 128
		}
	)}>
		<Modal
			animationType='fade'
			transparent={true}
			visible={modalOpen}
			onRequestClose={() => setModalOpen(false)}
		>
			<View style={mergeStyles(
				ViewStyles.flexColumn,
				ViewStyles.alignCenter,
				ViewStyles.justifyCenter,
				{
					position: 'fixed',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: '#000000A0'
			})}>
				<View style={mergeStyles(
					ViewStyles.flexColumn, 
					ViewStyles.justifyCenter, 
					ViewStyles.alignCenter,
					ViewStyles.pad(16),
					{
						backgroundColor: 'white',
						width: '40%'
					})
				}>
					<TouchableHighlight style={{position:'absolute', top: 4, right: 4}} onPress={() => {setModalOpen(false)}}>
						<Lucide name='x' size={32}></Lucide>
					</TouchableHighlight>
					<Text>Editing AC</Text>
					<TextInput 
						keyboardType='decimal-pad' 
						value={number.toString()}
						onSubmitEditing={() => {
							if (!isNaN(Number(number))) {
								setAC(Number(number))}
								setModalOpen(false)
						}}
						onChangeText={setNumber}
						style={{
							borderColor:'black',
							borderWidth: 2,
							color: 'black',
							width: 128
						}}
					></TextInput>
				</View>
			</View>
		</Modal>
		<Text style={{
			position: 'absolute', 
			color: "#000", 
			fontSize: 32, 
			zIndex: -1,
			top: 18
		}}>{AC}</Text>
		<TouchableHighlight 
			hitSlop={8} 
			onLongPress={() => {
				setNumber(AC.toString())
				setModalOpen(true)
			}}
			underlayColor={'#000000AA'}>
			<ShieldIcon/>
		</TouchableHighlight>
		<View style={ mergeStyles(
			ViewStyles.flexRow,
			ViewStyles.alignCenter,
			ViewStyles.justifyCenter,
			ViewStyles.marginTop(6),
		)}>
			<Button title='+1' onPress={() => setAC(AC + 1)}/>
			<View style={{width: 6}} />
			<Button title='-1' onPress={() => setAC(AC - 1)}/>
		</View>
	</View>
	)
}