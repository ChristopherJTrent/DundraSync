import { StyleProp, TextStyle, ViewStyle } from 'react-native';


export function mergeStyles<T extends StyleProp<ViewStyle> | StyleProp<TextStyle>>(...styles:T[]):T {
	return Object.assign({}, ...styles) as T
}