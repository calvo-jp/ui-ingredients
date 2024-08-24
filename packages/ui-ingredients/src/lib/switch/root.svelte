<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSwitchContextProps, CreateSwitchContextReturn} from './context.svelte.js';

  export interface SwitchProps
    extends Assign<
      Omit<HtmlIngredientProps<'label'>, 'children'>,
      Omit<CreateSwitchContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateSwitchContextReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createSwitchContext, setSwitchContext} from './context.svelte.js';

  let {
    id,
    ids,
    dir,
    form,
    name,
    label,
    value,
    checked,
    invalid,
    disabled,
    readOnly,
    required,
    onCheckedChange,
    getRootNode,
    children,
    ...props
  }: SwitchProps = $props();

  let localeContext = useLocaleContext();
  let environmentContext = getEnvironmentContext();

  let context = createSwitchContext({
    id: id ?? createUniqueId(),
    ids,
    dir: dir ?? localeContext?.dir,
    form,
    name,
    label,
    value: $state.snapshot(value),
    checked,
    invalid,
    disabled,
    readOnly,
    required,
    onCheckedChange,
    getRootNode: getRootNode ?? environmentContext?.getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setSwitchContext(context);
</script>

<label {...attrs}>
  {@render children?.(context)}
</label>
