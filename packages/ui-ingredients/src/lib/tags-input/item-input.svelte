<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputItemInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useTagsInputContext,
    useTagsInputItemPropsContext,
  } from './context.svelte.js';

  let {...props}: TagsInputItemInputProps = $props();

  let context = useTagsInputContext();

  let itemProps = useTagsInputItemPropsContext();

  let attrs = $derived(mergeProps(props, context.getItemInputProps(itemProps)));
</script>

<input {...attrs} />
