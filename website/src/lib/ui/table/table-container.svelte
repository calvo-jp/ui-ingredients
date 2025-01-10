<script lang="ts">
  import type {SvelteHTMLElements} from 'svelte/elements';

  let {children, ...props}: SvelteHTMLElements['div'] = $props();
</script>

<div
  data-scope="table"
  data-part="container"
  {...props}
  class={[
    'overflow-x-auto overflow-y-hidden rounded-md border border-neutral-200 dark:border-neutral-800',
    props.class,
  ]}
>
  {@render children?.()}
</div>
