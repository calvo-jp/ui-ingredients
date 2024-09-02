<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateClipboardProps,
    CreateClipboardReturn,
  } from './create-clipboard.svelte.js';

  export interface ClipboardProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateClipboardProps> {
    asChild?: AsChild<CreateClipboardReturn>;
    children?: Snippet<[CreateClipboardReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '@zag-js/utils';
  import {setClipboardContext} from './context.svelte.js';
  import {createClipboard} from './create-clipboard.svelte.js';

  let {asChild, children, ...props}: ClipboardProps = $props();

  let [clipboardProps, otherProps] = $derived(
    createSplitProps<CreateClipboardProps>([
      'id',
      'ids',
      'value',
      'timeout',
      'onStatusChange',
    ])(props),
  );

  let clipboard = createClipboard(reflect(() => clipboardProps));

  let mergedProps = $derived(mergeProps(otherProps, clipboard.getRootProps()));

  setClipboardContext(clipboard);
</script>

{#if asChild}
  {@render asChild(mergedProps, clipboard)}
{:else}
  <div {...mergedProps}>
    {@render children?.(clipboard)}
  </div>
{/if}
