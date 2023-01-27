<script lang="js">
  import { browser } from "$app/environment";
  import userStore from "/src/lib/stores/users.js";
  import authStore from "/src/lib/stores/auth.js";
  import { onMount } from "svelte";

  $: if (browser) document.title = "Test";

  onMount(async () => {
    console.log($authStore.user);
    console.log($userStore.users);
  });
</script>

<p class="text-green-500">Hello world</p>
<a href="/home">Go to home</a>
