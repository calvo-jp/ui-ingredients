<script lang="ts" context="module">
  import type {HtmlIngredientsProps} from '$lib/types.js';

  export interface TagsInputItemInputProps
    extends HtmlIngredientsProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    useTagsInputContext,
    useTagsInputItemContext,
  } from './context.svelte.js';

  let {...props}: TagsInputItemInputProps = $props();

  let context = useTagsInputContext();
  let itemContext = useTagsInputItemContext();

  let attrs = $derived(
    mergeProps(props, context.getItemInputProps(itemContext)),
  );
</script>

<input {...attrs} />
