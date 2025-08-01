import Lucide from '@react-native-vector-icons/lucide';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
	return (
		<Tabs screenOptions={{ tabBarActiveTintColor: 'red'}}>
			<Tabs.Screen
				name='home'
				options={{
					title: 'Home',
					tabBarIcon: ({color}) => <Lucide name='house' size={28} color={color} />
				}} 
			/>
			<Tabs.Screen
				name='character'
				options={{
					title: 'Character',
					tabBarIcon: ({color}) => <Lucide name='user' size={28} color={color} />
				}}
			/>
		</Tabs>
	)
}