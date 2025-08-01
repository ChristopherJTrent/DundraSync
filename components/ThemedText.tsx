import { Colors } from '@/constants/Colors'
import { useThemeColor } from '@/hooks/useThemeColor'
import { Text, TextProps } from 'react-native'

export function ThemedText(props: TextProps) {
	const color = useThemeColor({light: Colors.light.text, dark: Colors.dark.text}, 'text')
	return <Text 
		style = {[
			{color},
			props.style
		]}
		{...props}
	>{props.children}</Text>
}