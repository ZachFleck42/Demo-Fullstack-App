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

<div class="flex flex-col h-full w-full justify-center bg-white">
  <div class="mx-auto h-24 my-8">
    <img src="src/assets/Iris_logo.png" alt="Iris Automation logo" />
  </div>

  <div class="w-full max-w-sm mx-auto">
    <form class="shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-blue-300 focus:shadow-none"
          id="username"
          type="text"
          autocomplete="email"
          placeholder="you@example.com"
        />
      </div>
      <div class="mb-6">
        <label
          class="block text-gray-700 text-sm font-bold mb-2"
          for="password"
        >
          Password
        </label>
        <input
          class="shadow appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-300 focus:shadow-none"
          id="password"
          type="password"
          placeholder="********"
        />
      </div>
      <div class="flex items-center">
        <button
          class="mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 active:bg-blue-700 rounded focus:outline-none focus:shadow-outline w-full transition duration-150 ease-in-out"
          type="button"
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
            <span class="select-none bg-white px-3 mb-4">
              Or continue with
            </span>
          </div>
        </div>
      </div>
      <div class="flex items-center">
        <button
          class="mx-auto py-2 px-4 w-full border-solid border-2 rounded mt-2 hover:border-blue-300 hover:bg-slate-50 active:bg-slate-100 transition duration-100 ease-in-out"
          type="button"
          on:click={loginWithGoogle}
        >
          <img
            src="src/assets/Google_logo.png"
            alt="Google logo"
            width="24px"
            class="mx-auto"
          />
        </button>
      </div>
    </form>
    <p class="text-center text-gray-500 text-xs">&copy;2020 Iris Automation</p>
  </div>
</div>
