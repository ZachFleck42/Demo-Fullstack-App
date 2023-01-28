import {browser} from '$app/environment';
import {writable} from 'svelte/store';

const Key = 'user';
const stored = browser ? (JSON.parse(localStorage.getItem(Key))) : {};

const createStore = () => {
	const {subscribe, set} = writable(stored);

	return {
		set,
		subscribe,
		reset() {
			set(undefined);
		},
	};
};

const authStore = createStore();

authStore.subscribe(async (user) => {
	if (!browser) return;
	if (user) localStorage.setItem('user', JSON.stringify(user));
	else {
		authStore.reset();
		localStorage.removeItem('user');
	}
});

export default authStore;