<script lang="js">
  import { browser } from "$app/environment";

  $: if (browser) document.title = "Profile";
</script>

<p>Profile</p>
