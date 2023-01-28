<script lang="js">
  import App from "../../App.svelte";
  import Navbar from "/src/lib/components/Navbar.svelte";
  import Footer from "/src/lib/components/Footer.svelte";
</script>

<App>
  <Navbar />
  <div class="px-20">
    <slot />
  </div>
  <Footer />
</App>
