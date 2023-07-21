<script lang="js">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import authStore from "/src/lib/stores/auth.js";
  import { scale } from "svelte/transition";
  import { onMount } from "svelte";
  import { getAuth, signOut } from "firebase/auth";
  import Iris_logo_short from "/src/assets/Iris_logo_short.png";
  import { get } from "svelte/store";
  import NavbarButton from "$lib/components/navigation/NavbarButton.svelte";

  let show = false;
  let menu = null;
  let user;

  let pages = [
    {
      href: "/app",
      name: "Home",
    },
    {
      href: "/app/upload",
      name: "Upload",
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

  $: pages[0].active = $page.url.pathname.endsWith(pages[0].href);
  $: pages[1].active = $page.url.pathname.includes(pages[1].href);
  $: pages[2].active = $page.url.pathname.includes(pages[2].href);
  $: pages[3].active = $page.url.pathname.includes(pages[3].href);

  onMount(() => {
    user = get(authStore).user;

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

  const logOut = async () => {
    const auth = getAuth();
    await signOut(auth);
    await authStore.reset();
    await goto("/signin");
  };
</script>

<div class="max-w-8xl mx-auto border-b-2 bg-white px-20">
  <div class="flex h-20 w-full items-center justify-between">
    <div class="flex h-full w-full items-center justify-between">
      <div class="flex-shrink-0">
        <a href="/app" class="flex">
          <img
            src={Iris_logo_short}
            alt="Home"
            class="text-primary-600 my-auto h-12 w-auto"
          />
        </a>
      </div>
      <div class="mr-32 flex h-full items-center justify-center">
        <div
          class="flex h-12 items-center justify-center space-x-16 text-xl font-light"
        >
          {#each pages as page}
            <NavbarButton {...page} />
          {/each}
        </div>
      </div>

      <div class="flex items-center">
        <!-- Profile Navigation -->
        <div class="relative" bind:this={menu}>
          <button on:click={() => (show = !show)}>
            {#if user?.photoURL}
              <div
                class="flex h-12 w-12 rounded-full transition duration-150 ease-in-out hover:ring hover:ring-gray-300 active:ring active:ring-gray-500"
              >
                <div class="m-auto rounded-full">
                  <img
                    src={user?.photoURL}
                    alt={user?.displayName}
                    class="rounded-full"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
            {:else}
              <div
                class="bg-orange-300 border-ed flex h-12 w-12 rounded-full transition duration-150 ease-in-out hover:ring hover:ring-gray-300 active:ring active:ring-gray-500"
              >
                <div class="m-auto font-semibold">
                  {user?.email[0].toUpperCase()}
                </div>
              </div>
            {/if}
          </button>
          {#if show}
            <div
              in:scale={{ duration: 100, start: 0.95 }}
              out:scale={{ duration: 75, start: 0.95 }}
              class="absolute right-0 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-md
          ring-2 ring-gray-200"
            >
              <a
                on:click={() => (show = !show)}
                href="/app/profile"
                class="block px-4 py-2 transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300"
                >My Profile</a
              >
              <button
                on:click={logOut}
                class="block w-full px-4 py-2 text-left transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300"
                >Sign Out</button
              >
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
</div>
