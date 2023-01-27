<script lang="js">
  export let user = {};

  let first_name = user.first_name ?? "John";
  let last_name = user.last_name ?? "Doe";
  let email = user.email ?? "john.doe@fake.com";
  let avatar = user.avatar ?? "";
</script>

<a
  href="/app/user/{first_name}{last_name}"
  class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100"
>
  <img
    class="w-24 h-24 m-3 ml-5 rounded-full shadow-lg"
    src={avatar}
    alt="{first_name} {last_name}'s Avatar"
  />
  <div class="flex flex-col justify-between p-4 leading-normal">
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
      {first_name}
      {last_name}
    </h5>
    <p class="mb-3 font-normal text-gray-700">
      {email}
    </p>
  </div>
</a>
