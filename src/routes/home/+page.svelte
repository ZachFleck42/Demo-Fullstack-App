<script lang="js">
  import authStore from "/src/lib/stores/auth.js";
</script>

<div>
  <p>Hello world</p>
  {#if $authStore.isLoggedIn}
    <p>Your email is {$authStore.user.email}</p>
  {/if}
</div>
