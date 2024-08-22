<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemDeleteTriggerProps
    extends HtmlIngredientProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useTagsInputContext,
    useTagsInputItemPropsContext,
  } from './context.svelte.js';

  let {children, ...props}: TagsInputItemDeleteTriggerProps = $props();

  let context = useTagsInputContext();

  let itemProps = useTagsInputItemPropsContext();

  let attrs = $derived(
    mergeProps(props, context.getItemDeleteTriggerProps(itemProps)),
  );
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
