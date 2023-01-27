<script lang="js">
  import userStore from "/src/lib/stores/users.js";
  import UserCard from "/src/lib/components/UserCard.svelte";
</script>

<div class="grid grid-cols-3 gap-2">
  {#each $userStore.users as user}
    <div class="mb-2">
      <UserCard {user} />
    </div>
  {/each}
</div>
