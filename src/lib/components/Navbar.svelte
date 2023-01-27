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

  const logOut = () => {
    const auth = getAuth();
    signOut(auth);
  };
</script>

<div class="mx-auto max-w-8xl px-4 md:px-8 lg:px-12 border-b-2">
  <div class="flex h-20 w-full items-center justify-between">
    <div class="flex w-full items-center justify-between">
      <div class="flex-shrink-0">
        <a href="/home" class="flex">
          <img
            src="/src/assets/Iris_logo_short.png"
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
        <!-- Change Theme -->
        <button
          on:click={() => console.log("Theme change")}
          class="mx-8 rounded-full"
        >
          <div class="m-auto p-1">
            <p>T</p>
          </div>
        </button>

        <!-- Profile Navigation -->
        <div class="relative" bind:this={menu}>
          <button on:click={() => (show = !show)}>
            {#if $authStore.user.photoURL}
              <div
                class="flex h-12 w-12 rounded-full border-solid bg-blue-500 text-white hover:border-gray-300 hover:border-4"
              >
                <div class="m-auto">
                  {$authStore.user.email[0].toUpperCase()}
                </div>
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
