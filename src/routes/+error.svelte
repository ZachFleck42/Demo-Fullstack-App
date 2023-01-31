<script>
  import { page } from "$app/stores";
</script>

<h1>{$page.status}: {$page.error.message}</h1>
<p>
  An unexpected error has occurred. Please recheck internet connection, refresh
  the application, and try again.
</p>
<p>
  If you continue to experience issues, please <a href="/app/support"
    >contact support</a
  >
</p>
