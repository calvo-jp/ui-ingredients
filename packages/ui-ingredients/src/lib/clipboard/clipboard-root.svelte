<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateClipboardProps,
    CreateClipboardReturn,
  } from './create-clipboard.svelte.js';

  export interface ClipboardProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateClipboardReturn>,
      CreateClipboardProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setClipboardContext} from './clipboard-context.svelte.js';
  import {createClipboard} from './create-clipboard.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ClipboardProps = $props();

  let [createClipboardProps, localProps] = $derived(
    createSplitProps<CreateClipboardProps>([
      'id',
      'ids',
      'value',
      'timeout',
      'onStatusChange',
    ])(props),
  );

  let clipboard = createClipboard(reflect(() => createClipboardProps));

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
