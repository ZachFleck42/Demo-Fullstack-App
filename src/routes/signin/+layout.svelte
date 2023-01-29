<script lang="js">
  import App from "../../App.svelte";
  import Footer from "/src/lib/components/Footer.svelte";
  import { goto } from "$app/navigation";

  export let data;
  let userLoggedIn = data.loggedIn;

  $: if (userLoggedIn) redirect("/app");

  const redirect = async (route) => {
    await goto(route);
  };
</script>

{#if !userLoggedIn}
  <App>
    <slot />
    <Footer />
  </App>
{/if}
