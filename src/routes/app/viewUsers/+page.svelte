<script lang="js">
  import userStore from "/src/lib/stores/users.js";
  import HorizontalUserCard from "/src/lib/components/HorizontalUserCard.svelte";
</script>

<div class="flex">
  <div class="mx-auto flex-col m-5 w-1/3">
    {#each $userStore.users as user}
      <div class="mb-2">
        <HorizontalUserCard {user} />
      </div>
    {/each}
  </div>
</div>
