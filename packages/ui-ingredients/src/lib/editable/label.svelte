<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableLabelProps extends HtmlIngredientProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useEditableContext} from './context.svelte.js';

  let {children, ...props}: EditableLabelProps = $props();

  let context = useEditableContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
