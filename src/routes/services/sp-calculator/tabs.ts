import { writable } from 'svelte/store';

export enum SPTabs {
	Instruction,
	SkillQueue,
	Summary,
}

const tab = SPTabs.SkillQueue;
export const currentTabStore = writable(tab);
