<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface TagsInputHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {tagsInputContext} from './context.svelte.js';

  let {...props}: TagsInputHiddenInputProps = $props();

  let field = getFieldContext();
  let tagsInput = tagsInputContext.get();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getHiddenInputProps()),
  );
</script>

<input aria-describedby={field?.['aria-describedby']} {...mergedProps} />
