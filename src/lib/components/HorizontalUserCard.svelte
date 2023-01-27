<script lang="js">
  export let user = {};

  let first_name = user.first_name ?? "John";
  let last_name = user.last_name ?? "Doe";
  let email = user.email ?? "john.doe@fake.com";
  let avatar = user.avatar ?? "";
</script>

<div>
  <img
    src={avatar}
    alt="{first_name} {last_name}'s Avatar"
    class="w-24 h-24 mb-3 rounded-full shadow-lg"
  />
</div>
