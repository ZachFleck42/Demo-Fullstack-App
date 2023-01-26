<script>
  import "./app.css";
  import { initializeApp } from "firebase/app";

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
</script>

<div class="bg-red-800">
  <slot />
</div>
