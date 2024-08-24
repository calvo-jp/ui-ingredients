<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateToggleGroupProps,
    CreateToggleGroupReturn,
  } from './create-toggle-group.svelte.js';

  export interface ToggleGroupProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateToggleGroupProps, 'id'>
    > {
    children?: Snippet<[api: CreateToggleGroupReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {toggleGroupContext} from './context.svelte.js';
  import {createToggleGroup} from './create-toggle-group.svelte.js';

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

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createToggleGroup({
    id: id ?? uid,
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

  toggleGroupContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
