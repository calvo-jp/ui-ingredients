<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputClearTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTagsInputContext} from './context.svelte.js';

  let {children, ...props}: TagsInputClearTriggerProps = $props();

  let context = useTagsInputContext();

  let attrs = $derived(mergeProps(props, context.getClearTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
