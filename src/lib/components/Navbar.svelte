<script lang="js">
  import { goto } from "$app/navigation";
  import authStore from "/src/lib/stores/auth.js";
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { getAuth, signOut } from "firebase/auth";

  let show = false;
  let menu = null;
  let current = "Home";

  let pages = [
    {
      href: "/app",
      name: "Home",
    },
    {
      href: "/app/users",
      name: "Users",
    },
    {
      href: "/app/support",
      name: "Support",
    },
  ];

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
    signOut(auth)
      .then(async () => {
        authStore.set({
          isLoggedIn: false,
          user: {},
        });
        await goto("/signin");
      })
      .catch((error) => {
        console.log(error);
      });
  };
</script>

<div class="mx-auto max-w-8xl px-20 border-b-2 bg-white">
  <div class="flex h-20 w-full items-center justify-between">
    <div class="flex w-full items-center justify-between">
      <div class="flex-shrink-0">
        <a href="/app" class="flex">
          <img
            src="/src/assets/Iris_logo_short.png"
            alt="Home"
            class="my-auto h-12 w-auto text-primary-600"
          />
        </a>
      </div>

      <div class="mr-32">
        <div class="flex space-x-16 text-xl font-light">
          {#each pages as page}
            <a href={page.href} class="hover:text-gray-400">{page.name}</a>
          {/each}
        </div>
      </div>

      <div class="flex items-center">
        <!-- Profile Navigation -->
        <div class="relative" bind:this={menu}>
          <button
            class
            hover:border-gray-300
            hover:border-2
            on:click={() => (show = !show)}
          >
            {#if $authStore.user.photoURL}
              <div class="flex h-12 w-12 rounded-full border-solid">
                <div class="m-auto rounded-full">
                  <img
                    src={$authStore.user.photoURL}
                    alt={$authStore.user.displayName}
                    class="rounded-full"
                  />
                </div>
              </div>
            {:else if $authStore.user.email}
              <div
                class="flex h-12 w-12 rounded-full border-solid bg-blue-500 text-white hover:border-gray-300 hover:border-2"
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
              class="origin-top-right overflow-hidden absolute right-0 w-36 bg-gray-100
          rounded-md shadow-md"
            >
              <a
                on:click={() => (show = !show)}
                href="/app/profile"
                class="block px-4 py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
                >Profile</a
              >
              <button
                on:click={logOut}
                class="block w-full text-left px-4 py-2 hover:bg-gray-200 active:bg-gray-300 transition duration-150 ease-in-out"
                >Sign Out</button
              >
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
