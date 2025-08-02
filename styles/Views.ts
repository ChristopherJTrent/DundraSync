import { StyleProp, ViewStyle } from 'react-native';

type ViewStyles = {
	centeredFlexColumn: StyleProp<ViewStyle>
	centeredFlexRow: StyleProp<ViewStyle>
}

export const ViewStyleProps: ViewStyles = {
	centeredFlexColumn: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	centeredFlexRow: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
}