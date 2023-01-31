<script lang="js">
  export let href;
  export let name;
  export let active;
</script>

<a
  {href}
  class={active
    ? "flex h-full items-center justify-center border-b-2 border-gray-300 hover:text-gray-600"
    : "border-b-2 border-transparent hover:text-gray-600"}>{name}</a
>
