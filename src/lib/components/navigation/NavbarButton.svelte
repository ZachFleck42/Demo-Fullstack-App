<script lang="js">
  export let href;
  export let name;
  export let active;
</script>

<a {href} class={active ? "bg-red-500 h-full" : "hover:text-gray-400"}>{name}</a
>
