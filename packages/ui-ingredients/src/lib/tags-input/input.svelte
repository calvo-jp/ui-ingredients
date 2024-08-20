<script lang="ts" context="module">
  import type {SvelteHtmlProps} from '$lib/types.js';

  export interface TagsInputInputProps extends SvelteHtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useTagsInputContext} from './context.svelte.js';

  let {...props}: TagsInputInputProps = $props();

  let context = useTagsInputContext();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
