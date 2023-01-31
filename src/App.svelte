<script lang="js">
  import "./app.css";
  import { initializeApp } from "firebase/app";
  import { onMount } from "svelte";

  onMount(() => {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_APP_API_KEY,
      authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_APP_PROJECT_ID,
      storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_APP_ID,
      measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
    };

    const app = initializeApp(firebaseConfig);
  });
</script>

<div class="h-screen bg-gray-100">
  <slot />
</div>
