<script lang="js">
  import { browser } from "$app/environment";

  $: if (browser) document.title = "Profile";

  export let data;
  const user = data.user;
</script>

<div class="flex justify-center mt-96">
  <div class="m-auto text-center">
    <p>Profile</p>
    <p>{user.email}</p>
  </div>
</div>
