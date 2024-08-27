<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface TagsInputItemInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tagsInputContext, tagsInputItemPropsContext} from './context.svelte.js';

  let {...props}: TagsInputItemInputProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = tagsInputItemPropsContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getItemInputProps(itemProps)));
</script>

<input {...attrs} />
