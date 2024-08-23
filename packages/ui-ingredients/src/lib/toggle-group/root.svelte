<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateToggleGroupContextProps,
    CreateToggleGroupContextReturn,
  } from './context.svelte.js';

  export interface ToggleGroupProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateToggleGroupContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateToggleGroupContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createToggleGroupContext,
    setToggleGroupContext,
  } from './context.svelte.js';

  let {
    id,
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

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createToggleGroupContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    value: $state.snapshot(value),
    disabled,
    multiple,
    loopFocus,
    rovingFocus,
    orientation,
    onValueChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setToggleGroupContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
