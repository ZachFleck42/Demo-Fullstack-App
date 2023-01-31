<script lang="js">
  import { browser } from "$app/environment";

  $: if (browser) document.title = "Support";
</script>

<div class="flex pt-12">
  <div class="mx-auto max-w-screen-md py-8 px-4 lg:py-16">
    <h2
      class="mb-4 text-center text-4xl font-semibold tracking-tight text-black"
    >
      Request support
    </h2>
    <p class="mb-8 pt-4 text-center font-light text-gray-500 lg:mb-16">
      Experiencing a problem with the application? Send a message to our support
      team and we'll get back to you as soon as possible.
    </p>
    <form action="#" class="space-y-8">
      <div>
        <label for="email" class="mb-2 block text-sm font-medium text-gray-900"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="mb-3 w-full appearance-none rounded-md border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow-inner focus:outline-blue-300"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label
          for="subject"
          class="mb-2 block text-sm font-medium text-gray-900">Subject</label
        >
        <input
          autocomplete="off"
          type="text"
          id="subject"
          class="mb-3 w-full appearance-none rounded-md border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow-inner focus:outline-blue-300"
          placeholder=""
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="mb-2 block text-sm font-medium text-gray-900 "
          >Your message</label
        >
        <textarea
          id="message"
          rows="7"
          class="mb-3 w-full resize-none appearance-none rounded-md border border-gray-300 py-2 px-3 leading-tight text-gray-700 shadow-inner focus:outline-blue-300"
          placeholder=""
        />
      </div>
      <button
        type="submit"
        class="h-10 rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-fit"
        >Send message</button
      >
    </form>
  </div>
</div>
