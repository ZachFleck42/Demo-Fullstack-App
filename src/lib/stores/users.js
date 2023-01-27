import { writable } from 'svelte/store';

const userStore = writable({
    data: [],
}
);

export default {
    subscribe: userStore.subscribe,
    set: userStore.set
}