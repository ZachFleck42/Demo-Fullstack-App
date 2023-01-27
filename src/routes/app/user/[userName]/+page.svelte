<script lang="js">
  import { onMount } from "svelte";
  import userStore from "/src/lib/stores/users.js";
  import { page } from "$app/stores";

  let first_name;
  let last_name;
  let email;
  let avatar;

  onMount(() => {
    let full_name = $page.params.userName.split(/(?=[A-Z])/);
    first_name = full_name[0];
    last_name = full_name[1];
  });
</script>

{$first_name}
