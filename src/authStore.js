// authStore.js
import { writable } from 'svelte/store';
import { auth } from './Firebase';

export const user = writable(null);
export const error = writable(null);

auth.onAuthStateChanged(authUser => {
  user.set(authUser);
}); 
