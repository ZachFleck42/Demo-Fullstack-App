import authStore from "/src/lib/stores/auth.js";
import { get } from 'svelte/store'

export const ssr = false;
export const prerender = false;

console.log(get(authStore));