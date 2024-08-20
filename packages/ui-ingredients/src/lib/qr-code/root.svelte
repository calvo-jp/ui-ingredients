<script lang="ts" context="module">
  import type {Assign, SvelteHtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateQRCodeContextProps,
    CreateQRCodeContextReturn,
  } from './context.svelte.js';

  export interface QRCodeProps
    extends Assign<
      Omit<SvelteHtmlProps<'div'>, 'children'>,
      Omit<CreateQRCodeContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateQRCodeContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createQRCodeContext, setQRCodeContext} from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    value,
    encoding,
    getRootNode,
    children,
    ...props
  }: QRCodeProps = $props();

  let context = createQRCodeContext({
    id: id ?? uuid(),
    ids,
    dir,
    value: $state.snapshot(value),
    encoding,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setQRCodeContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
