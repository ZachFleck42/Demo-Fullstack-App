import { writable } from "svelte/store";

const userStore = writable({
  users: [],
});

export default {
  subscribe: userStore.subscribe,
  set: userStore.set,
};
