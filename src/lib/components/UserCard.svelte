<script lang="js">
  import DropdownMenu from "/src/lib/components/DropdownMenu.svelte";

  export let user = {};

  let first_name = user.first_name ?? "John";
  let last_name = user.last_name ?? "Doe";
  let email = user.email ?? "john.doe@fake.com";
  let avatar = user.avatar ?? "";
  let id = user.id ?? 0;
</script>

<div class="bg-white border border-gray-200 rounded-lg shadow my-auto mx-8">
  <div class="relative flex justify-end pt-4 pr-4">
    <DropdownMenu />
  </div>
  <div class="flex flex-col items-center pb-10">
    <img
      class="w-24 h-24 mb-3 rounded-full shadow-lg"
      src={avatar}
      alt="{first_name} {last_name}'s profile picture"
    />
    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
      {first_name}
      {last_name}
    </h5>
    <span class="text-sm text-gray-500 dark:text-gray-400">{email}</span>
    <div class="flex mt-4 space-x-3 md:mt-6">
      <a
        href="/app/user/{id}"
        class="inline-flex items-center px-4 py-2 text-sm h-10 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 "
        >View Profile</a
      >
      <a
        href="mailto:{email}"
        class="inline-flex items-center px-4 py-2 text-sm h-10 font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 "
        >Send Email</a
      >
    </div>
  </div>
</div>
