import { writable } from 'svelte/store';

const storedSp = Number(localStorage.getItem('sp')) || 0;
export const sp = writable(storedSp);
sp.subscribe((value) => {
	localStorage.setItem('sp', value.toFixed(0) ?? '0');
});

export const input = writable('');
