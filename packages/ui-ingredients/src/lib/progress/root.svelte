<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateProgressContextProps, CreateProgressContextReturn} from './context.svelte.js';

  export interface ProgressProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      Omit<CreateProgressContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateProgressContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createProgressContext, setProgressContext} from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    max,
    min,
    value,
    orientation,
    translations,
    getRootNode,
    children,
    ...props
  }: ProgressProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createProgressContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    max,
    min,
    value: $state.snapshot(value),
    orientation,
    translations,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setProgressContext(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
