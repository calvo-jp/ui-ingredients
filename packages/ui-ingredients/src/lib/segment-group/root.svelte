<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateSegmentGroupContextProps,
    CreateSegmentGroupContextReturn,
  } from './context.svelte.js';

  export interface SegmentGroupProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateSegmentGroupContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateSegmentGroupContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId, ensureStyleIsString} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {createSegmentGroupContext, setSegmentGroupContext} from './context.svelte.js';

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
  }: SegmentGroupProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createSegmentGroupContext({
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

  let attrs = $derived(mergeProps(props, context.getRootProps(), parts.root.attrs));

  setSegmentGroupContext(context);
</script>

<div {...ensureStyleIsString(attrs)}>
  {@render children?.(context)}
</div>
