import { get } from "svelte/store";
import authStore from "$lib/stores/auth.js";

export async function load() {
  const user = get(authStore)?.user;
  return { user };
}
