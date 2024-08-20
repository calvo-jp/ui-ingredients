<script lang="ts" context="module">
  import type {Assign, SvelteHtmlProps} from '$lib/types.js';
  import type {ItemProps, ItemState} from '@zag-js/radio-group';
  import type {Snippet} from 'svelte';

  export interface RadioGroupItemProps
    extends Assign<Omit<SvelteHtmlProps<'label'>, 'children'>, ItemProps> {
    children?: Snippet<[state: ItemState]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {
    setRadioGroupItemContext,
    useRadioGroupContext,
  } from './context.svelte.js';

  let {
    /**/
    value,
    invalid,
    disabled,
    children,
    ...props
  }: RadioGroupItemProps = $props();

  let context = useRadioGroupContext();

  let state = $derived(
    context.getItemState({
      value,
      invalid,
      disabled,
    }),
  );

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemProps({
        value,
        invalid,
        disabled,
      }),
    ),
  );

  setRadioGroupItemContext({
    value,
    invalid,
    disabled,
  });
</script>

<label {...attrs}>
  {@render children?.(state)}
</label>
