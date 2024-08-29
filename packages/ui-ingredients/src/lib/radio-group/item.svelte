<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface RadioGroupItemProps
    extends Assign<Omit<HTMLProps<'label'>, 'children'>, ItemProps> {
    asChild?: AsChild<ItemState>;
    children?: Snippet<[ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {radioGroupContext, radioGroupItemPropsContext} from './context.svelte.js';

  let {value, invalid, disabled, children, asChild, ...props}: RadioGroupItemProps = $props();

  let radioGroup = radioGroupContext.get();
  let itemProps = $derived({
    value,
    invalid,
    disabled,
  });

  let state = $derived(radioGroup.getItemState(itemProps));
  let attrs = $derived(mergeProps(props, radioGroup.getItemProps(itemProps)));

  radioGroupItemPropsContext.set(() => itemProps);
</script>

{#if asChild}
  {@render asChild(attrs, state)}
{:else}
  <label {...attrs}>
    {@render children?.(state)}
  </label>
{/if}
