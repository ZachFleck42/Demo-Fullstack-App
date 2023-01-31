<script lang="js">
  import { browser } from "$app/environment";
  import HorizontalUserCard from "../../../../lib/components/HorizontalUserCard.svelte";

  $: if (browser) document.title = `User ${data.id}`;

  export let data;
</script>

<div class="mt-64 flex justify-center">
  <div class="m-auto">
    <HorizontalUserCard user={data} />
  </div>
</div>
