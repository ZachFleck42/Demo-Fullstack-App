import { writable } from 'svelte/store';

const authStore = writable({
    isLoggedIn: false,
    user: ''
});

export default {
    subscribe: authStore.subscribe,
    set: authStore.set
}