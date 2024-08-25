<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxListProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxListProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getListProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
