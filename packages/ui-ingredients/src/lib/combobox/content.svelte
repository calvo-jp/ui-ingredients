<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxContentProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxContentProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getContentProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
