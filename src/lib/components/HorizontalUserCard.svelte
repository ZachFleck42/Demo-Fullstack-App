<script lang="js">
  export let user = {};

  let first_name = user.first_name ?? "John";
  let last_name = user.last_name ?? "Doe";
</script>

<div>
  <p>{first_name}</p>
</div>
