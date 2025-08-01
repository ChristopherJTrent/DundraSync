import { Redirect } from 'expo-router';
import { ActivityIndicator, Text, View } from 'react-native';

export default function Root() {
	return <View>
		<View style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
			<ActivityIndicator size="large" />
			<Text>Loading... Please Wait.</Text>
		</View>
		<Redirect href="/(tabs)/home"/>
	</View>
}