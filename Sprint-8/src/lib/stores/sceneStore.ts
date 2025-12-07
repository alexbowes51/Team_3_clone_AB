import { writable } from 'svelte/store';

// Store for selected scene: 'beach' | 'forest' | null
export const sceneStore = writable<'beach' | 'forest' | null>(null);
