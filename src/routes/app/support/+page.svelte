<script lang="js">
  import { browser } from "$app/environment";

  $: if (browser) document.title = "Support";
</script>

<div class="flex pt-12">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2
      class="mb-4 text-4xl tracking-tight font-extrabold text-center text-black"
    >
      Request support
    </h2>
    <p class="mb-8 pt-4 lg:mb-16 font-light text-center text-gray-500">
      Experiencing a problem with the application? Send a message to our support
      team and we'll get back to you as soon as possible.
    </p>
    <form action="#" class="space-y-8">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="shadow-inner border-gray-300 rounded-md appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-300"
          placeholder="you@example.com"
          required
        />
      </div>
      <div>
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-gray-900">Subject</label
        >
        <input
          type="text"
          id="subject"
          class="shadow-inner border-gray-300 rounded-md appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-300"
          placeholder=""
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900 "
          >Your message</label
        >
        <textarea
          id="message"
          rows="6"
          class="shadow-inner border-gray-300 rounded-md appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-blue-300"
          placeholder=""
        />
      </div>
      <button
        type="submit"
        class="text-sm h-10 px-4 py-2 sm:w-fit font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >Send message</button
      >
    </form>
  </div>
</div>
