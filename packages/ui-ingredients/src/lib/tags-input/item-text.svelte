<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface TagsInputItemTextProps extends HtmlProps<'span'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tagsInputContext, tagsInputItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TagsInputItemTextProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = tagsInputItemPropsContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getItemTextProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <span {...attrs}>
    {@render children?.()}
  </span>
{/if}
