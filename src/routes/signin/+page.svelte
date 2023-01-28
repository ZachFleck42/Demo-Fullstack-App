<script lang="js">
  import { browser } from "$app/environment";
  import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
  import { goto } from "$app/navigation";
  import authStore from "$lib/stores/auth.js";
  import Google_logo from "/src/assets/Google_logo.png";
  import Iris_Logo from "/src/assets/Iris_logo.png";
  import { get } from "svelte/store";

  $: if (browser) document.title = "Sign in";

  let email = "";
  let password = "";

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const matches = email.match(regex) ?? [];
    return matches?.length > 0;
  };

  const loginWithEmail = async () => {
    if (!password) {
      console.log("ERROR: Missing password");
      return;
    }

    if (!validateEmail(email)) {
      console.log("ERROR: Invalid email");
      return;
    }

    console.log("Success");
  };

  const loginWithGoogle = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    authStore.set({
      isLoggedIn: true,
      user,
    });

    await goto("/app");
  };

  $: if (get(authStore)?.user) redirect();
  const redirect = async () => {
    await goto("/app");
  };
</script>

<div class="flex flex-col h-full w-full justify-center bg-white border-">
  <div class="mx-auto h-24 my-8">
    <img src={Iris_Logo} alt="Iris Automation logo" />
  </div>

  <div class="w-full max-w-sm mx-auto">
    <form
      class="shadow-md rounded px-8 pt-6 pb-8 mb-4 border-t-gray-50 border-t-2"
    >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          bind:value={email}
          class="shadow-inner appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300"
          id="username"
          type="text"
          autocomplete="email"
          placeholder="you@example.com"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2 mt-6"
          for="password"
        >
          Password
        </label>
        <input
          bind:value={password}
          class="shadow-inner appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-300"
          id="password"
          type="password"
          placeholder="********"
          on:keydown={({ key }) => {
            key === "Enter" && validateEmail(email)
              ? loginWithEmail(email)
              : undefined;
          }}
        />
      </div>
      <div class="flex items-center">
        <button
          class="mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 active:bg-blue-700 rounded focus:outline-none focus:shadow-outline w-full transition duration-150 ease-in-out disabled:bg-gray-400"
          type="button"
          disabled={!validateEmail(email)}
          on:click={loginWithEmail}
        >
          Sign In
        </button>
      </div>
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-500 mb-3" />
          </div>
          <div class="relative flex justify-center">
            <span class="select-none bg-white px-3 mb-4 font-normal">
              Or continue with
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <button
          class="mx-auto py-2 px-4 w-full border-solid border-2 rounded mt-2 hover:border-blue-300 hover:bg-gray-50 active:bg-gray-200 transition duration-150 ease-in-out"
          type="button"
          on:click={loginWithGoogle}
        >
          <img
            src={Google_logo}
            alt="Google logo"
            width="24px"
            class="mx-auto"
          />
        </button>
      </div>
    </form>
    <div class="flex justify-center">
      <p class="pr-2">New user?</p>
      <p class="text-blue-400">Register here</p>
    </div>
  </div>
</div>
