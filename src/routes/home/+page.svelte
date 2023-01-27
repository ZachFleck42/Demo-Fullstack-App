<script lang="js">
  import { browser } from "$app/environment";
  import userStore from "/src/lib/stores/users.js";
  import authStore from "/src/lib/stores/auth.js";
  import { onMount } from "svelte";
  import HorizontalUserCard from "/src/lib/components/HorizontalUserCard.svelte";
  import { getAuth, signOut } from "firebase/auth";
  import Navbar from "/src/lib/components/Navbar.svelte";

  $: if (browser) document.title = "Home";

  onMount(async () => {
    fetch("https://reqres.in/api/users/")
      .then((response) => response.json())
      .then(({ data }) => {
        let users = data;
        userStore.set({
          users,
        });
      })
      .catch((error) => {
        console.log(error);
        return;
      });
  });

  const logOut = () => {
    const auth = getAuth();
    signOut(auth);
  };
</script>

<Navbar />
<div>
  <p>Hello {$authStore.user.email}</p>
  <a href="/test">Go to test</a>
  <p on:click={logOut}>Log out</p>

  <div class="flex flex-col m-5">
    {#each $userStore.users as user}
      <div class="mb-2">
        <HorizontalUserCard {user} />
      </div>
    {/each}
  </div>
</div>
