<script lang="ts">
  /* ⚠️ This file is auto-generated */

  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['div'] = $props();
</script>

<div {...props}>{@render children?.()}</div>

<style>
  div {
    --bg: linear-gradient(112deg, #776db6 0%, #4f43a3 100%);
    background: var(--bg);
  }
</style>
