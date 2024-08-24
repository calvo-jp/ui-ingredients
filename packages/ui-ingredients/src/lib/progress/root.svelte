<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateProgressProps, CreateProgressReturn} from './create-progress.svelte.js';

  export interface ProgressProps
    extends Assign<Omit<HtmlIngredientProps<'div'>, 'children'>, Omit<CreateProgressProps, 'id'>> {
    children?: Snippet<[api: CreateProgressReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {progressContext} from './context.svelte.js';
  import {createProgress} from './create-progress.svelte.js';

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

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createProgress({
    id: id ?? uid,
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

  progressContext.set(context);
</script>

<div {...attrs}>
  {@render children?.(context)}
</div>
