<script lang="ts" module>
  import type {AsChild, Assign, HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateClipboardProps, CreateClipboardReturn} from './create-clipboard.svelte.js';

  export interface ClipboardProps
    extends Assign<Omit<HTMLProps<'div'>, 'children'>, CreateClipboardProps> {
    asChild?: AsChild<CreateClipboardReturn>;
    children?: Snippet<[CreateClipboardReturn]>;
  }
</script>

<script lang="ts">
  import {createSplitProps, mergeProps} from '$lib/utils.svelte.js';
  import {clipboardContext} from './context.svelte.js';
  import {createClipboard} from './create-clipboard.svelte.js';

  let {asChild, children, ...props}: ClipboardProps = $props();

  let [clipboardProps, otherProps] = createSplitProps<CreateClipboardProps>([
    'id',
    'ids',
    'value',
    'timeout',
    'onStatusChange',
  ])(props);

  let clipboard = createClipboard(clipboardProps);

  let mergedProps = $derived(mergeProps(otherProps, clipboard.getRootProps()));

  clipboardContext.set(clipboard);
</script>

{#if asChild}
  {@render asChild(mergedProps, clipboard)}
{:else}
  <div {...mergedProps}>
    {@render children?.(clipboard)}
  </div>
{/if}
