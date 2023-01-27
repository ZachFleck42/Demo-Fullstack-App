<script lang="js">
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

  const loginWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      console.log(result.user);
    } catch (e) {
      console.log(e);
    }
  };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<p on:click={loginWithGoogle}>Login with Google</p>
