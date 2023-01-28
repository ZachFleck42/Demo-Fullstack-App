<script lang="js">
  import "./app.css";
  import { initializeApp } from "firebase/app";
  import { onMount } from "svelte";
  import { getAuth } from "firebase/auth";

  let offline = false;
  window.addEventListener("offline", () => (offline = true));
  window.addEventListener("online", () => (offline = false));

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

    const app = initializeApp(firebaseConfig);

    const auth = getAuth();
  });
</script>

<div class="bg-gray-100 h-screen">
  <slot />
</div>
