<script lang="js">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import authStore from "/src/lib/stores/auth.js";

  onMount(async () => {
    if (!$authStore.isLoggedIn) {
      await goto("/signin");
    }
  });
</script>
