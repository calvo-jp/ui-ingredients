<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateAccordionContextProps,
    CreateAccordionContextReturn,
  } from './context.svelte.js';

  export interface AccordionProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateAccordionContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateAccordionContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {
    createAccordionContext,
    setAccordionContext,
  } from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    value,
    disabled,
    multiple,
    orientation,
    collapsible,
    onFocusChange,
    onValueChange,
    getRootNode,
    children,
    ...props
  }: AccordionProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createAccordionContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    value: $state.snapshot(value),
    multiple,
    disabled,
    collapsible,
    orientation,
    onFocusChange,
    onValueChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setAccordionContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
