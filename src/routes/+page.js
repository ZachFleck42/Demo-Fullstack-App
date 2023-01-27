import { goto } from '$app/navigation';
import { get } from 'svelte/store';
import authStore from '/src/lib/stores/auth.js'


export const load = async () => {
    const thing = get(authStore);
    
    if (thing.user && thing.isLoggedIn) await goto("/home")
    else await goto("/signin");
};
