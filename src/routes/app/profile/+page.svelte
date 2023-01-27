<script lang="js">
  import { browser } from "$app/environment";
  import authStore from "/src/lib/stores/auth.js";

  $: if (browser) document.title = "Profile";
</script>

<p>Profile</p>
