<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface TagsInputHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {tagsInputContext} from './context.svelte.js';

  let {...props}: TagsInputHiddenInputProps = $props();

  let tagsInput = tagsInputContext.get();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getHiddenInputProps()),
  );
</script>

<input {...mergedProps} />
