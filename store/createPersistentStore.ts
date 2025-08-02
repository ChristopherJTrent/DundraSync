import { create, StateCreator } from 'zustand'
import { createJSONStorage, persist, PersistOptions } from 'zustand/middleware'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function createDefaultPersistentStore<T>(stateCreator: StateCreator<T>, name: string) {
	return createPersistentStore<T>(stateCreator, {
		name,
		storage: createJSONStorage(() => AsyncStorage)
	})
}

export function createPersistentStore<T>(stateCreator: StateCreator<T>, opts:PersistOptions<T>){
	return create<T>()(
		persist(stateCreator, opts)
	)
}