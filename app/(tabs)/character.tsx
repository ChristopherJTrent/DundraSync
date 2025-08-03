import { AbilityScores } from '@/components/AbilityScores';
import ArmorClass from '@/components/ArmorClass';
import { HealthWidget } from '@/components/Health';
import { ThemedText } from '@/components/ThemedText';
import { mergeStyles } from '@/styles/util';
import { ViewStyles } from '@/styles/Views';
import { Text, View } from 'react-native';

export default function CharacterScreen() {
	return <View style = {mergeStyles(ViewStyles.flexRow)}>
		<AbilityScores />
		<ArmorClass />
		<HealthWidget />
	</View>
}