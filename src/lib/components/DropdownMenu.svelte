<script lang="js">
  import { scale } from "svelte/transition";
  import { clickOutside } from "/src/lib/utils/clickoutside.js";

  export let showDropdown;

  const handleClickOutside = () => {
    showDropdown = false;
  };
</script>

<button
  on:click={() => (showDropdown = !showDropdown)}
  id="dropdownButton"
  class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 rounded-lg text-sm p-1.5"
  type="button"
>
  <span class="sr-only">Open dropdown</span>
  <svg
    class="w-6 h-6"
    aria-hidden="true"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"
    /></svg
  >
</button>
{#if showDropdown}
  <div
    use:clickOutside
    on:click_outside={handleClickOutside}
    in:scale={{ duration: 100, start: 0.95 }}
    out:scale={{ duration: 75, start: 0.95 }}
    class="overflow-hidden absolute top-14 w-36 bg-white ring-2 ring-gray-200
          rounded-md shadow-sm"
  >
    <a
      on:click={() => (showDropdown = !showDropdown)}
      href="/app/users/#edit"
      class="block px-4 py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
      >Edit user info</a
    >
    <a
      on:click={() => (showDropdown = !showDropdown)}
      href="/app/users/#delete"
      class="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
      >Delete user</a
    >
  </div>
{/if}
