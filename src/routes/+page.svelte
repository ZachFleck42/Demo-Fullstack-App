<script lang="js">
  import { goto } from "$app/navigation";

  export let data;
  let userLoggedIn = data.loggedIn;

  $: if (!userLoggedIn) {
    redirect("/signin");
  } else {
    redirect("/app");
  }

  const redirect = async (route) => {
    await goto(route);
  };
</script>
