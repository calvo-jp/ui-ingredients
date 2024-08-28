<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';
  import {cx} from './utils.js';

  let {class: className, children, ...props}: SvelteHTMLElements['label'] = $props();
</script>

<label class={cx('text-muted mb-1 block font-medium')} {...props}>
  {@render children?.()}
</label>
