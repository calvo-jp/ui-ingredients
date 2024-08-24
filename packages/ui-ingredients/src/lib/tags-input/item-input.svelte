<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tagsInputContext, tagsInputItemPropsContext} from './context.svelte.js';

  let {...props}: TagsInputItemInputProps = $props();

  let context = tagsInputContext.get();

  let itemProps = tagsInputItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemInputProps(itemProps)));
</script>

<input {...attrs} />
