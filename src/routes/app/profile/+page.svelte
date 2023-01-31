<script lang="js">
  import { browser } from "$app/environment";
  import HorizontalUserCard from "../../../lib/components/HorizontalUserCard.svelte";

  $: if (browser) document.title = "Profile";

  export let data;
  const user = data.user;

  if (user.photoURL) user.avatar = user.photoURL;
  if (user.displayName) {
    user.first_name = user.displayName.split(" ")[0];
    user.last_name = user.displayName.split(" ")[1];
  }
</script>

<div class="flex justify-center mt-64">
  <div class="m-auto">
    <HorizontalUserCard {user} />
  </div>
</div>
