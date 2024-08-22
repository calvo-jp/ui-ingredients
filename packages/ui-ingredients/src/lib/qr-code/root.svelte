<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateQRCodeContextProps,
    CreateQRCodeContextReturn,
  } from './context.svelte.js';

  export interface QRCodeProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateQRCodeContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateQRCodeContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
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

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createQRCodeContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    value: $state.snapshot(value),
    encoding,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setQRCodeContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
