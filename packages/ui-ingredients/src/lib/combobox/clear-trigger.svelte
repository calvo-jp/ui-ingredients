<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxClearTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxClearTriggerProps = $props();

  let context = comboboxContext.get();

  let attrs = $derived(mergeProps(props, context.getClearTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
