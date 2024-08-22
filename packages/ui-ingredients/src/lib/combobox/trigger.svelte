<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxTriggerProps extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxTriggerProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
