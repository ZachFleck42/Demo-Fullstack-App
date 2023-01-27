<script lang="js">
  import { goto } from "$app/navigation";
  import authStore from "/src/lib/stores/auth.js";
  import { onMount } from "svelte";

  onMount(async () => {
    if (!$authStore.isLoggedIn) {
      await goto("/signin");
    }
  });
</script>
