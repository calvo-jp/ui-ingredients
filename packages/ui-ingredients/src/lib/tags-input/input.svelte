<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TagsInputInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tagsInputContext} from './context.svelte.js';

  let {...props}: TagsInputInputProps = $props();

  let tagsInput = tagsInputContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getInputProps()));
</script>

<input {...attrs} />
