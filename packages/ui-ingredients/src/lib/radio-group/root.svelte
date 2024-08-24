<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateRadioGroupContextProps,
    CreateRadioGroupContextReturn,
  } from './context.svelte.js';

  export interface RadioGroupProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateRadioGroupContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateRadioGroupContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createRadioGroupContext, setRadioGroupContext} from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    form,
    name,
    value,
    disabled,
    readOnly,
    orientation,
    onValueChange,
    getRootNode,
    children,
    ...props
  }: RadioGroupProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createRadioGroupContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    form,
    name,
    value: $state.snapshot(value),
    disabled,
    readOnly,
    orientation,
    onValueChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setRadioGroupContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
