<script lang="js">
  import { browser } from "$app/environment";
  import HorizontalUserCard from "../../../../lib/components/HorizontalUserCard.svelte";
  $: if (browser) document.title = "Home";

  export let data;
</script>

<div class="flex justify-center mt-64">
  <div class="m-auto">
    <HorizontalUserCard user={data} />
  </div>
</div>
