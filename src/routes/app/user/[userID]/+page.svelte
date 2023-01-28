<script lang="js">
  import { browser } from "$app/environment";
  import HorizontalUserCard from "../../../../lib/components/HorizontalUserCard.svelte";
  $: if (browser) document.title = "Home";

  export let data;

  let first_name = data.first_name;
  let last_name = data.last_name;
  let email = data.email;
  let avatar = data.avatar;
</script>

<div class="flex justify-center mt-64">
  <div class="m-auto">
    <!-- <img
      src={avatar}
      alt="{first_name} {last_name}'s avatar"
      class="w-24 h-24 rounded-full align-center"
    />
    <p>{first_name} {last_name}</p>
    <p>{email}</p> -->
    <HorizontalUserCard user={data} />
  </div>
</div>
