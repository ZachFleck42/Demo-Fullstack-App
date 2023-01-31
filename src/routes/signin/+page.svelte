<script lang="js">
  import { browser } from "$app/environment";
  import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";
  import { goto } from "$app/navigation";
  import { get } from "svelte/store";
  import authStore from "$lib/stores/auth.js";
  import Google_logo from "/src/assets/Google_logo.png";
  import Iris_Logo from "/src/assets/Iris_logo.png";

  $: if (browser && !registering) {
    document.title = "Sign in";
  } else if (browser && registering) {
    document.title = "Register";
  }
  $: if (get(authStore)?.user) redirect("/app");

  let email = "";
  let password = "";
  let confirmPassword = "";
  let registering = false;
  let error = "";

  const validateEmail = (email) => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const matches = email.match(regex) ?? [];
    return matches?.length > 0;
  };

  const registerUser = async () => {
    if (!password) {
      error = "Error: Please enter a password";
      return;
    }

    if (!validateEmail(email)) {
      error = "Error: Please enter a valid email";
      return;
    }

    if (password !== confirmPassword) {
      error = "Error: Passwords do not match";
      return;
    }

    if (password.length < 6) {
      error = "Error: Password must be at least 6 characters";
      return;
    }

    try {
      const auth = getAuth();
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      authStore.set({
        isLoggedIn: true,
        user: result.user,
      });
      await goto("/app");
    } catch (e) {
      error =
        "Error: Signin failed. Please try again later and contact support if error persists.";
      return;
    }
  };

  const loginWithEmail = async () => {
    if (!password) {
      error = "Error: Please enter a password";
      return;
    }

    if (!validateEmail(email)) {
      error = "Error: Please enter a valid email";
      return;
    }

    try {
      const auth = getAuth();
      const result = await signInWithEmailAndPassword(auth, email, password);
      authStore.set({
        isLoggedIn: true,
        user: result.user,
      });
      await goto("/app");
    } catch (e) {
      error =
        "Error: Signin failed. Please try again later and contact support if error persists.";
      return;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      authStore.set({
        isLoggedIn: true,
        user: result.user,
      });
      await goto("/app");
    } catch (e) {
      error =
        "Error: Signin failed. Please try again later or contact support if error persists.";
      return;
    }
  };

  const redirect = async (route) => {
    await goto(route);
  };
</script>

<div class="border- flex h-full w-full flex-col justify-center bg-white">
  <div class="mx-auto my-8 h-24">
    <img src={Iris_Logo} alt="Iris Automation logo" />
  </div>

  <div class="mx-auto w-full max-w-sm">
    <form
      class="mb-4 rounded border-t-2 border-t-gray-50 px-8 pt-6 pb-8 shadow-md"
    >
      <div class="mb-4">
        <label class="mb-2 block text-sm font-bold text-gray-700" for="email">
          Email
        </label>
        <input
          bind:value={email}
          class="w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-inner focus:outline-blue-300"
          id="username"
          type="text"
          autocomplete="email"
          placeholder="you@example.com"
        />
      </div>
      <div class="">
        <label
          class="mb-2 mt-6 block text-sm font-bold text-gray-700"
          for="password"
        >
          Password
        </label>
        <input
          bind:value={password}
          class="mb-3 w-full appearance-none border py-2 px-3 leading-tight text-gray-700 shadow-inner focus:outline-blue-300"
          id="password"
          type="password"
          placeholder="********"
          on:keydown={({ key }) => {
            key === "Enter" && !registering ? loginWithEmail(email) : undefined;
          }}
        />
      </div>
      {#if registering}
        <div class="">
          <label
            class="mb-2 block text-sm font-bold text-gray-700"
            for="password"
          >
            Confirm Password
          </label>
          <input
            bind:value={confirmPassword}
            class="mb-3 w-full appearance-none border py-2 px-3 leading-tight text-gray-700 shadow-inner focus:outline-blue-300"
            id="confirmPassword"
            type="password"
            placeholder="********"
            on:keydown={({ key }) => {
              key === "Enter" && registering ? registerUser() : undefined;
            }}
          />
        </div>
      {/if}
      {#if error}
        <p class="text-red-500">{error}</p>
      {/if}
      <div />
      <div class="flex items-center">
        <button
          class="mx-auto mt-4 w-full rounded bg-blue-500 py-2 px-4 font-bold text-white transition duration-150 ease-in-out hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-400"
          type="button"
          disabled={!validateEmail(email) ||
            password.length < 6 ||
            (registering && confirmPassword.length < 6)}
          on:click={registering ? registerUser : loginWithEmail}
        >
          {#if !registering}
            Sign In
          {:else}
            Register
          {/if}
        </button>
      </div>
      <div class="mt-6">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="mb-3 w-full border-t border-gray-500" />
          </div>
          <div class="relative flex justify-center">
            <span class="mb-4 select-none bg-white px-3 font-normal">
              Or continue with
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <button
          class="mx-auto mt-2 w-full rounded border-2 border-solid py-2 px-4 transition duration-150 ease-in-out hover:border-blue-300 hover:bg-gray-50 active:bg-gray-200"
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
      {#if !registering}
        <p class="pr-2">New user?</p>
        <a
          on:click={() => (registering = !registering)}
          class="text-blue-400 hover:cursor-pointer hover:text-blue-500"
          >Register here</a
        >
      {:else}
        <a
          on:click={() => (registering = !registering)}
          class="text-blue-400 hover:cursor-pointer hover:text-blue-500"
          >Back to login page</a
        >{/if}
    </div>
  </div>
</div>
