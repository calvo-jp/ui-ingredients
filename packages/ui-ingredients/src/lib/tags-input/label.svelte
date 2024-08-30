<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TagsInputLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {tagsInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: TagsInputLabelProps = $props();

  let tagsInput = tagsInputContext.get();

  let mergedProps = $derived(mergeProps(props, tagsInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
