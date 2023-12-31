import type { ComponentType, SvelteComponent } from 'svelte';

export type Tab<T> = {
	name: string;
	component: ComponentType<SvelteComponent>;
	value: T;
};
