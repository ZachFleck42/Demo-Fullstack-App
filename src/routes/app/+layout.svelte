<script lang="js">
  import App from "../../App.svelte";
  import Navbar from "/src/lib/components/navigation/Navbar.svelte";
  import Footer from "/src/lib/components/Footer.svelte";
  import { goto } from "$app/navigation";

  export let data;
  let userLoggedIn = data.loggedIn;

  $: if (!userLoggedIn) redirect();
  const redirect = async () => {
    await goto("/signin");
  };
</script>

{#if userLoggedIn}
  <App>
    <Navbar />
    <div class="px-20">
      <slot />
    </div>
    <Footer />
  </App>
{/if}
