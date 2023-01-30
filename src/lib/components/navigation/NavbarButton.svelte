<script lang="js">
  export let href;
  export let name;
  export let active;
</script>

<a
  {href}
  class={active
    ? "border-b-2 border-gray-300 hover:text-gray-600 h-full flex items-center justify-center"
    : "hover:text-gray-600 border-b-2 border-transparent"}>{name}</a
>
