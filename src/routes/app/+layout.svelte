<script lang="js">
  import App from "../../App.svelte";
  import authStore from "/src/lib/stores/auth.js";
  import Navbar from "/src/lib/components/Navbar.svelte";
  import Footer from "/src/lib/components/Footer.svelte";

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
      <slot />
      <Footer />
    {/if}
  </svelte:fragment>
</App>
