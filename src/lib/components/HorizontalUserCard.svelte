<script lang="js">
  export let user = {};

  let first_name = user.first_name ?? "John";
  let last_name = user.last_name ?? "Doe";
  let email = user.email ?? "john.doe@fake.com";
  let avatar = user.avatar ?? "";
</script>

<div class="w-auto">
  <div
    class="flex items-center rounded-lg border border-gray-200 bg-white shadow "
  >
    {#if avatar}
      <img
        class="m-5 h-32 w-32 rounded-full shadow-lg"
        src={avatar}
        alt="{first_name} {last_name}'s Avatar"
      />
    {:else}
      <div class="m-5 flex h-28 w-28 rounded-full bg-blue-500 shadow-lg">
        <div class="m-auto text-6xl font-light text-white">
          {user?.email[0].toUpperCase()}
        </div>
      </div>
    {/if}
    <div class="flex flex-col justify-between p-4">
      <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900">
        {first_name}
        {last_name}
      </h5>
      <p class="font-normal text-gray-700">
        {email}
      </p>
    </div>
    <div class="flex flex-row space-x-6 pl-6" />
  </div>
</div>
