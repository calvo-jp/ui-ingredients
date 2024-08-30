<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface TagsInputItemTextProps extends HTMLProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {
    tagsInputContext,
    tagsInputItemPropsContext,
  } from './context.svelte.js';

  let {asChild, children, ...props}: TagsInputItemTextProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = tagsInputItemPropsContext.get();

  let mergedProps = $derived(
    mergeProps(props, tagsInput.getItemTextProps(itemProps)),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
