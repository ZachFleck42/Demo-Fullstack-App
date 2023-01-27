<script lang="js">
  import authStore from "/src/lib/stores/auth.js";
  import { onMount } from "svelte";
  import HorizontalUserCard from "/src/lib/components/HorizontalUserCard.svelte";

  let users = [];

  onMount(async () => {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then(({ data }) => {
        users = data;
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

  <div>
    {#each users as user}
      <HorizontalUserCard {user} />
    {/each}
  </div>
</div>
