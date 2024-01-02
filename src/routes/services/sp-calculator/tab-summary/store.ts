import { writable } from 'svelte/store';
export enum Attributes {
	Charisma = 164,
	Perception = 165,
	Memory = 166,
	Intelligence = 167,
	Willpower = 168,
}

export const attributesNames = new Map<Attributes, string>([
	[Attributes.Charisma, 'Charisma'],
	[Attributes.Perception, 'Perception'],
	[Attributes.Memory, 'Memory'],
	[Attributes.Intelligence, 'Intelligence'],
	[Attributes.Willpower, 'Willpower'],
]);

export const defaultRemap = new Map<Attributes, number>([
	[Attributes.Charisma, 19],
	[Attributes.Perception, 20],
	[Attributes.Memory, 20],
	[Attributes.Intelligence, 20],
	[Attributes.Willpower, 20],
]);
const storedRemapString = localStorage.getItem('remap');

const storedRemap = storedRemapString
	? new Map<Attributes, number>(JSON.parse(storedRemapString))
	: defaultRemap;
export const remapWritable = writable(storedRemap);
remapWritable.subscribe((value) => {
	localStorage.setItem('remap', JSON.stringify(Array.from(value)) ?? '');
});
