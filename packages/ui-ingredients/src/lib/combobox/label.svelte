<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxLabelProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
