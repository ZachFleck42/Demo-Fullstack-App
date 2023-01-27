<script lang="js">
  import App from "../../App.svelte";
  import authStore from "/src/lib/stores/auth.js";
  import Navbar from "/src/lib/components/Navbar.svelte";
</script>

<App>
  <svelte:fragment>
    {#if $authStore?.user}
      <Navbar />
      <div class="bg-slate-200 h-full">
        <slot />
      </div>
    {/if}
  </svelte:fragment>
</App>
