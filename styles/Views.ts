import { StyleProp, ViewStyle } from 'react-native';

type ViewStylesType = {
	flexColumn: StyleProp<ViewStyle>
	flexRow: StyleProp<ViewStyle>
	justifyCenter: StyleProp<ViewStyle>
	alignCenter: StyleProp<ViewStyle>
	pad: (n:number) => StyleProp<ViewStyle>
	padBottom: (n:number) => StyleProp<ViewStyle>
	padLeft: (n:number) => StyleProp<ViewStyle>
	padRight: (n:number) => StyleProp<ViewStyle>
	padTop: (n:number) => StyleProp<ViewStyle>
	margin: (n:number) => StyleProp<ViewStyle>
	marginBottom: (n:number) => StyleProp<ViewStyle>
	marginLeft: (n:number) => StyleProp<ViewStyle>
	marginRight: (n:number) => StyleProp<ViewStyle>
	marginTop: (n:number) => StyleProp<ViewStyle>
}

export const ViewStyles: ViewStylesType = {
	flexColumn: {
		display: 'flex',
		flexDirection: 'column'
	},
	flexRow: {
		display: 'flex',
		flexDirection: 'row'
	},
	justifyCenter: {
		justifyContent: 'center'
	},
	alignCenter: {
		alignItems: 'center'
	},
	pad: (n) => ({padding: n}),
	padBottom: (n) => ({paddingBottom: n}),
	padLeft: (n) => ({paddingLeft: n}),
	padRight: (n) => ({paddingRight: n}),
	padTop: (n) => ({paddingTop: n}),
	margin: (n) => ({margin: n}),
	marginTop: (n) => ({marginTop: n}),
	marginRight: (n) => ({marginRight: n}),
	marginBottom: (n) => ({marginBottom: n}),
	marginLeft: (n) => ({marginLeft:n})
}