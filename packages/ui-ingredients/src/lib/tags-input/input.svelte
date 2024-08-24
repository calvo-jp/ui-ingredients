<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TagsInputInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {tagsInputContext} from './context.svelte.js';

  let {...props}: TagsInputInputProps = $props();

  let context = tagsInputContext.get();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
