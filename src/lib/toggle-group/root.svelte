<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {
    CreateToggleGroupContextProps,
    CreateToggleGroupContextReturn,
  } from './context.svelte.js';

  export interface ToggleGroupProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['div']>,
      OptionalId<CreateToggleGroupContextProps>
    > {
    children?: Snippet<[CreateToggleGroupContextReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createToggleGroupContext, setToggleGroupContext} from './context.svelte.js';

  let {
    id = nanoid(),
    ids,
    dir,
    value,
    disabled,
    multiple,
    loopFocus,
    rovingFocus,
    orientation,
    onValueChange,
    getRootNode,
    children,
    ...props
  }: ToggleGroupProps = $props();

  let context = createToggleGroupContext({
    id: nanoid(),
    ids,
    dir,
    value: $state.snapshot(value),
    disabled,
    multiple,
    loopFocus,
    rovingFocus,
    orientation,
    onValueChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setToggleGroupContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
