import { get } from "svelte/store";
import authStore from "$lib/stores/auth.js";

export const ssr = false;
export const prerender = false;

export async function load() {
    let user = get(authStore)?.user;
    if (user) {
        return {
            loggedIn: true,
        }
    }
    else {
        return {
            loggedIn: false,
        }
    }
}