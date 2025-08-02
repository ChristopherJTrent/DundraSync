import { mergeStyles } from '@/styles/util';
import { ViewStyles } from '@/styles/Views';
import { View } from 'react-native';
import { AbilityScore } from './AbilityScore';

export function AbilityScores() {
	return <View style = {mergeStyles(
		ViewStyles.flexColumn,
		ViewStyles.alignCenter
	)}>
		<AbilityScore name='STR' />
		<AbilityScore name='DEX' />
		<AbilityScore name='CON' />
		<AbilityScore name='INT' />
		<AbilityScore name='WIS' />
		<AbilityScore name='CHA' />
	</View>
}