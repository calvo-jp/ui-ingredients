<script lang="ts" module>
  import type {AsChild, Assign, GenericHtmlProps, HtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/tags-input';
  import type {Snippet} from 'svelte';

  export interface TagsInputItemProps
    extends Assign<Omit<HtmlProps<'div'>, 'children'>, ItemProps> {
    asChild?: AsChild<GenericHtmlProps, ItemState>;
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tagsInputContext, tagsInputItemPropsContext} from './context.svelte.js';

  let {index, value, disabled, asChild, children, ...props}: TagsInputItemProps = $props();

  let tagsInput = tagsInputContext.get();
  let itemProps = $derived({
    index,
    value,
    disabled,
  });

  let state = $derived(tagsInput.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, tagsInput.getItemProps(itemProps)));

  tagsInputItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <div {...attrs}>
    {@render children?.(state)}
  </div>
{/if}
