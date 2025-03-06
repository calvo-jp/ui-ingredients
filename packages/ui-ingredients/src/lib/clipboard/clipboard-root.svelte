<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateClipboardProps,
    CreateClipboardReturn,
  } from './create-clipboard.svelte.js';

  export interface ClipboardProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateClipboardReturn>,
      Optional<CreateClipboardProps, 'id'>
    > {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setClipboardContext} from './clipboard-context.svelte.js';
  import {createClipboard} from './create-clipboard.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ClipboardProps = $props();

  let uid = $props.id();

  let [createClipboardProps, localProps] = $derived(
    createSplitProps<Omit<CreateClipboardProps, 'id'>>([
      'defaultValue',
      'ids',
      'onStatusChange',
      'onValueChange',
      'timeout',
      'value',
    ])(props),
  );

  let clipboard = createClipboard(
    reflect(() => ({...createClipboardProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(clipboard.getRootProps(), localProps));

  setClipboardContext(clipboard);
</script>

{#if asChild}
  {@render asChild(mergedProps, clipboard)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(clipboard)}
  </div>
{/if}
