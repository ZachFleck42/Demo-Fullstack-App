<script lang="js">
  import App from "../../App.svelte";
  import authStore from "/src/lib/stores/auth.js";
  import Navbar from "/src/lib/components/Navbar.svelte";

  let userLoggedIn = false;

  authStore.subscribe(async ({ user }) => {
    if (user) {
      userLoggedIn = true;
    }
  });
</script>

<App>
  <svelte:fragment>
    {#if userLoggedIn}
      <Navbar />
      <div class="bg-slate-100 h-full">
        <slot />
      </div>
    {/if}
  </svelte:fragment>
</App>
