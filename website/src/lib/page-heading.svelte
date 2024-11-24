<script lang="ts">
  let {title, description}: {title: string; description: string} = $props();
</script>

<h1 class="not-prose text-4xl font-bold text-neutral-800 dark:text-white">
  {title}
</h1>
<p class="not-prose mb-12 mt-3 text-lg text-neutral-600 dark:text-neutral-400">
  {description}
</p>
