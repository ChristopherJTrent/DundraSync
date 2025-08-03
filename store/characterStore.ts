import { createDefaultPersistentStore } from './createPersistentStore'

export type AbilityScoreName = "STR"|"DEX"|"CON"|"INT"|"WIS"|"CHA"

interface CharacterState {
	AC: number
	AbilityScores: {[k in AbilityScoreName]: number}
	Health: number
	TemporaryHealth: number
	setAC: (n: number) => void
	setAbilityScore: (k: AbilityScoreName, v: number) => void
	setHealth: (v:number) => void
	setTemporaryHealth: (v: number) => void
}

export const useCharacterStore = createDefaultPersistentStore<CharacterState>((set) => ({
	AC: 10,
	AbilityScores: {STR: 10, DEX: 10, CON: 10, INT: 10, WIS: 10, CHA: 10},
	Health: 1,
	TemporaryHealth: 1,
	setAC: (n) => set(() => ({AC: n})),
	setAbilityScore: (k, v) => set((state) => ({AbilityScores: {...state.AbilityScores, [k]: v}})),
	setHealth: (v) => set(() => ({Health: v})),
	setTemporaryHealth: (v) => set(() => ({TemporaryHealth: v})),
}), 'character')