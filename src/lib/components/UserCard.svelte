<script lang="js">
  import DropdownMenu from "/src/lib/components/DropdownMenu.svelte";

  export let user = {};

  let first_name = user.first_name ?? "John";
  let last_name = user.last_name ?? "Doe";
  let email = user.email ?? "john.doe@fake.com";
  let avatar = user.avatar ?? "";
  let id = user.id ?? 0;
</script>

<div class="my-auto mx-8 rounded-lg border border-gray-200 bg-white shadow">
  <div class="relative flex justify-end pt-4 pr-4">
    <DropdownMenu />
  </div>
  <div class="flex flex-col items-center pb-10">
    <img
      class="mb-3 h-24 w-24 rounded-full shadow-lg"
      src={avatar}
      alt="{first_name} {last_name}'s profile picture"
    />
    <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
      {first_name}
      {last_name}
    </h5>
    <span class="text-sm text-gray-500 dark:text-gray-400">{email}</span>
    <div class="mt-4 flex space-x-3 md:mt-6">
      <a
        href="/app/user/{id}"
        class="inline-flex h-10 items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 "
        >View Profile</a
      >
      <a
        href="mailto:{email}"
        class="inline-flex h-10 items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 "
        >Send Email</a
      >
    </div>
  </div>
</div>
