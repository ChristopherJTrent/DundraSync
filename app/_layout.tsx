import { useColorScheme } from '@/hooks/useColorScheme.web';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from "expo-router";

export default function RootLayout() {
	const color = useColorScheme()
  	return (
		<ThemeProvider value={color === 'dark' ? DarkTheme : DefaultTheme}>
			<Stack>
				<Stack.Screen name='(tabs)' options={{ headerShown: false}} />
			</Stack>
		</ThemeProvider>
	)
}
