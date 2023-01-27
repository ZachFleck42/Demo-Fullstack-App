<script lang="js">
  import { browser } from "$app/environment";
  import userStore from "/src/lib/stores/users.js";
  import UserCard from "/src/lib/components/UserCard.svelte";

  $: if (browser) document.title = "Users";
</script>

<div class="mt-8">
  <div class="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3">
    {#each $userStore.users as user}
      <div class="mb-2">
        <UserCard {user} />
      </div>
    {/each}
  </div>
</div>
