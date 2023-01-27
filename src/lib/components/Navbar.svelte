<script lang="js">
  import { goto } from "$app/navigation";

  let pages = [];
</script>

<div
  class="top-0 z-50 hidden border-b border-dark-800 bg-dark-900 md:sticky md:block"
>
  <div class="mx-auto max-w-8xl px-4 md:px-6 lg:px-8">
    <div class="flex h-20 w-full items-center justify-between">
      <div class="flex w-full items-center justify-between">
        <div class="flex-shrink-0">
          <a href="/home" class="flex">
            <img
              src="/src/assets/Iris_logo.png"
              alt="Home"
              class="my-auto h-8 w-auto text-primary-600"
            />
          </a>
        </div>

        <div>
          <div class="flex space-x-3 lg:space-x-6">
            {#each pages as page}
              <p>Page</p>
            {/each}
          </div>
        </div>

        <div class="flex items-center">
          <button
            on:click={() => console.log("Theme change")}
            class="ml-4 hidden h-8 w-8 rounded-full text-dark-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-light-800 dark:focus:ring-offset-dark-100 md:flex"
          >
            <div class="m-auto p-1">
              <p>T</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
