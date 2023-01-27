<script lang="js">
  import userStore from "/src/lib/stores/users.js";
  import UserCard from "/src/lib/components/UserCard.svelte";
</script>

<div class="justify-items-center">
  <div
    class="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3"
  >
    {#each $userStore.users as user}
      <div class="mb-2">
        <UserCard {user} />
      </div>
    {/each}
  </div>
</div>
