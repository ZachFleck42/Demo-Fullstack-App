<script lang="js">
  export let data;

  let first_name = data.first_name;
  let last_name = data.last_name;
  let email = data.email;
  let avatar = data.avatar;
</script>

<div class="flex flex-col">
  <div class="mx-auto text-center">
    <img
      src={avatar}
      alt="{first_name} {last_name}'s avatar"
      class="w-24 h-24 rounded-full"
    />
    <p>{first_name} {last_name}</p>
    <p>{email}</p>
  </div>
</div>
