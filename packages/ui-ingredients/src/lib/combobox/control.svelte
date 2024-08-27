<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxControlProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxControlProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
