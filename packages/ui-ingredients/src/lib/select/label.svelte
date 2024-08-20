<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface SelectLabelProps extends SvelteHtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSelectContext} from './context.svelte.js';

  let {children, ...props}: SelectLabelProps = $props();

  let context = useSelectContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
