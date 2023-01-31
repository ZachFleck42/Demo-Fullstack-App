<script lang="js">
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";

  let showDropdown;
  let dropdownMenu = null;

  onMount(() => {
    const handleOutsideClick = (event) => {
      if (showDropdown && !dropdownMenu.contains(event.target)) {
        showDropdown = false;
      }
    };

    document.addEventListener("click", handleOutsideClick, false);

    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
    };
  });
</script>

<button
  bind:this={dropdownMenu}
  on:click={() => (showDropdown = !showDropdown)}
  id="dropdownButton"
  class="inline-block rounded-lg p-1.5 text-sm text-gray-500 hover:bg-gray-100 dark:text-gray-400"
  type="button"
>
  <svg
    class="h-6 w-6"
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
    in:scale={{ duration: 100, start: 0.95 }}
    out:scale={{ duration: 75, start: 0.95 }}
    class="absolute top-14 w-36 overflow-hidden rounded-md bg-white shadow-sm
          ring-2 ring-gray-200"
  >
    <a
      on:click={() => (showDropdown = !showDropdown)}
      href="/app/users/#edit"
      class="block px-4 py-2 transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300"
      >Edit user info</a
    >
    <a
      on:click={() => (showDropdown = !showDropdown)}
      href="/app/users/#delete"
      class="block w-full px-4 py-2 text-left text-red-500 transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300"
      >Delete user</a
    >
  </div>
{/if}
