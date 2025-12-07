import { writable } from 'svelte/store';

// Type for breathing method
export type BreathingMethod = 'box' | '4-7-8' | 'diaphragmatic' | 'custom' | null;

// Default breathing method is null
export const breathingMethodStore = writable<BreathingMethod>(null);
