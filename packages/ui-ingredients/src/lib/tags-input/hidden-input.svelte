<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTagsInputContext} from './context.svelte.js';

  let {...props}: TagsInputHiddenInputProps = $props();

  let context = useTagsInputContext();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps()));
</script>

<input {...attrs} />
