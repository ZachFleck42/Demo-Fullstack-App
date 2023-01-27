<script lang="js">
  import "./app.css";
  import { goto } from "$app/navigation";
  import { initializeApp } from "firebase/app";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import authStore from "/src/lib/stores/auth.js";

  let offline = false;
  let theme = "";
  // $: theme = $settingsStore?.theme === Theme.dark ? "dark" : "";

  onMount(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyD3uTEt6BUD1j_TNWG6JDU6avSg6QULbGg",
      authDomain: "zfleck-iris-app.firebaseapp.com",
      projectId: "zfleck-iris-app",
      storageBucket: "zfleck-iris-app.appspot.com",
      messagingSenderId: "817800640640",
      appId: "1:817800640640:web:22e1a390f6dd266f188e65",
      measurementId: "G-CKQSRS45DM",
    };

    initializeApp(firebaseConfig);

    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        authStore.set({ user });
      } else {
        await goto("/signin");
      }
    });
  });
</script>

<div class="bg-white h-screen">
  <slot />
</div>
