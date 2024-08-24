<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SelectLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext} from './context.svelte.js';

  let {children, ...props}: SelectLabelProps = $props();

  let context = selectContext.get();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
