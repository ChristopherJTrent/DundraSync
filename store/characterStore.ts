import { createDefaultPersistentStore } from './createPersistentStore'

interface CharacterState {
	AC: number,
	setAC: (n: number) => void
}

export const useCharacterStore = createDefaultPersistentStore<CharacterState>((set) => ({
	AC: 10,
	setAC: (n) => set(() => ({
		AC: n
	}))
}), 'character')