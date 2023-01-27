<script lang="js">
  export let user = {};

  let first_name = user.first_name ?? "John";
  let last_name = user.last_name ?? "Doe";
  let email = user.email ?? "john.doe@fake.com";
  let avatar = user.avatar ?? "";
</script>

<div class="w-auto">
  <a
    href="/app/user/{first_name}{last_name}"
    class="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 active:bg-gray-300 transition duration-200 ease-in-out"
  >
    <img
      class="w-24 h-24 m-3 ml-5 rounded-full shadow-lg"
      src={avatar}
      alt="{first_name} {last_name}'s Avatar"
    />
    <div class="flex flex-col justify-between p-4">
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        {first_name}
        {last_name}
      </h5>
      <p class="font-normal text-gray-700">
        {email}
      </p>
    </div>
    <div class="flex flex-row pl-6 space-x-6" />
  </a>
</div>
