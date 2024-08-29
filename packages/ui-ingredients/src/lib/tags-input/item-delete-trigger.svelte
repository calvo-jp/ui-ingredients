<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface TagsInputItemDeleteTriggerProps extends HtmlProps<'button'> {
    asChild?: AsChild<HtmlProps<'button'>>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tagsInputContext, tagsInputItemPropsContext} from './context.svelte.js';

  let {asChild, children, ...props}: TagsInputItemDeleteTriggerProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = tagsInputItemPropsContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getItemDeleteTriggerProps(itemProps)));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
