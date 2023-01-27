<script lang="js">
  import { onMount } from "svelte";
  import userStore from "/src/lib/stores/users.js";
  import { page } from "$app/stores";

  export let data;
</script>

{data.post.title}
