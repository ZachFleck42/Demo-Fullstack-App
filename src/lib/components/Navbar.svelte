<script lang="js">
  import { goto } from "$app/navigation";
  import authStore from "/src/lib/stores/auth.js";
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";

  let show = false;
  let menu = null;

  let pages = [];

  onMount(() => {
    const handleOutsideClick = (event) => {
      if (show && !menu.contains(event.target)) {
        show = false;
      }
    };

    const handleEscape = (event) => {
      if (show && event.key === "Escape") {
        show = false;
      }
    };

    document.addEventListener("click", handleOutsideClick, false);
    document.addEventListener("keyup", handleEscape, false);

    return () => {
      document.removeEventListener("click", handleOutsideClick, false);
      document.removeEventListener("keyup", handleEscape, false);
    };
  });
</script>

<div
  class="top-0 z-50 hidden border-b border-dark-800 bg-dark-900 md:sticky md:block"
>
  <div class="mx-auto max-w-8xl px-4 md:px-8 lg:px-12">
    <div class="flex h-20 w-full items-center justify-between">
      <div class="flex w-full items-center justify-between">
        <div class="flex-shrink-0">
          <a href="/home" class="flex">
            <img
              src="/src/assets/Iris_logo.png"
              alt="Home"
              class="my-auto h-12 w-auto text-primary-600"
            />
          </a>
        </div>

        <div>
          <div class="flex space-x-3 lg:space-x-6">
            {#each pages as page}
              <p>Page</p>
            {/each}
          </div>
        </div>

        <div class="flex items-center">
          <button
            on:click={() => console.log("Theme change")}
            class="ml-4 hidden h-8 w-8 rounded-full text-dark-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-light-800 dark:focus:ring-offset-dark-100 md:flex"
          >
            <div class="m-auto p-1">
              <p>T</p>
            </div>
          </button>
          <div class="relative" bind:this={menu}>
            <button
              class="active:border-red-500"
              on:click={() => (show = !show)}
            >
              {#if $authStore.user.photoURL}
                <img
                  class="h-12 w-12 rounded-full"
                  src={$authStore.user.photoURL}
                  alt={$authStore.user.displayName}
                />
              {:else}
                <div
                  class="flex h-12 w-12 rounded-full bg-slate-400 text-lg text-white"
                >
                  <span class="m-auto">
                    <p>x</p>
                  </span>
                </div>
              {/if}
            </button>
            {#if show}
              <div
                in:scale={{ duration: 100, start: 0.95 }}
                out:scale={{ duration: 75, start: 0.95 }}
                class="origin-top-right absolute right-0 w-48 py-2 mt-1 bg-gray-800
          rounded shadow-md"
              >
                <a
                  href="/profile"
                  class="block px-4 py-2 hover:bg-green-500 hover:text-green-100"
                  >Profile</a
                >
                <a
                  href="/api/logout"
                  class="block px-4 py-2 hover:bg-green-500 hover:text-green-100"
                  >Logout</a
                >
              </div>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
