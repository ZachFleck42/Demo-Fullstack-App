<script lang="js">
  import { browser } from "$app/environment";
  import userStore from "/src/lib/stores/users.js";
  import { onMount } from "svelte";

  $: if (browser) document.title = "Test";

  let users = [];

  onMount(async () => {
    users = $userStore.data;
    console.log($userStore.users);
  });
</script>

<p class="text-green-500">Hello world</p>
<a href="/home">Go to home</a>
