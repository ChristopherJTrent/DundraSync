import { AbilityScoreName, useCharacterStore } from '@/store/characterStore';
import { mergeStyles } from '@/styles/util';
import { ViewStyles } from '@/styles/Views';
import Lucide from '@react-native-vector-icons/lucide';
import { useState } from 'react';
import { Modal, Text, TextInput, TouchableHighlight, View } from 'react-native';

type AbilityScoreProps = {
	name: AbilityScoreName
}

const getModifier = (n:number):number => (Math.floor((n-10)/2))

export function AbilityScore({
	name
}:AbilityScoreProps) {
	const {AbilityScores, setAbilityScore} = useCharacterStore()
	const [modalOpen, setModalOpen] = useState(false)
	const [editor, setEditor] = useState('')

	return <TouchableHighlight 
				hitSlop={4} 
				onLongPress={() => {setEditor(AbilityScores[name].toString()); setModalOpen(true)}}
				underlayColor='#00000050'>
		<View style={mergeStyles(
			ViewStyles.flexColumn,
			ViewStyles.alignCenter,
			ViewStyles.justifyCenter,
			{
				borderColor: 'black',
				borderRadius: 8,
				borderWidth: 2,
				width: 128
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
						backgroundColor: '#00000050'
					}
				)}>
					<View style={mergeStyles(
						ViewStyles.flexColumn,
						ViewStyles.justifyCenter,
						ViewStyles.alignCenter,
						ViewStyles.pad(32),
						{
							backgroundColor: 'white',
							borderRadius: 16,
							width: '20%',
							height: '40%'
						}
					)}>
						<TouchableHighlight onPress={() => setModalOpen(false)} style={{
							position: 'absolute',
							top: 8,
							right: 8,
						}}>
							<Lucide name='x' size={32} />
						</TouchableHighlight>
						<Text>Editing {name}</Text>
						<TextInput
							keyboardType='decimal-pad'
							value={editor}
							onChangeText={(t) => setEditor(t)}
							onSubmitEditing={() => {if (!isNaN(Number(editor))) setAbilityScore(name, Number(editor)); setModalOpen(false)}}
							style={mergeStyles({
								borderColor: 'black',
								borderWidth: 1,
								borderRadius: 8,
								width: 72
							})}/>
					</View>
				</View>
			</Modal>
			<Text>
				{name}
			</Text>
			<Text style = {mergeStyles({
				fontSize: 35,
				padding: 0,
				margin: 0
			})}>
				{AbilityScores[name]}
			</Text>
			<Text style = {{
				fontSize: 20
			}}>
				{getModifier(AbilityScores[name]) >= 0 ? '+' :''}{getModifier(AbilityScores[name])}
			</Text>
		</View>
	</TouchableHighlight>
}