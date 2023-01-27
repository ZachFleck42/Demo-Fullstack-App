<script lang="js">
  import { browser } from "$app/environment";

  import authStore from "/src/lib/stores/auth.js";
  import { onMount } from "svelte";
  import HorizontalUserCard from "/src/lib/components/HorizontalUserCard.svelte";

  $: if (browser) document.title = "Home";

  let users = [];

  onMount(async () => {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then(({ data }) => {
        users = data;
        console.log(users);
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  });
</script>

<div>
  <p>Hello world</p>
  {#if $authStore.isLoggedIn}
    <p>Your email is {$authStore.user.email}</p>
  {/if}
  <a href="/test">Go to test</a>

  <div class="flex flex-col m-5">
    {#each users as user}
      <div class="mb-2">
        <HorizontalUserCard {user} />
      </div>
    {/each}
  </div>
</div>
