<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSwitchProps, CreateSwitchReturn} from './create-switch.svelte.js';

  export interface SwitchProps
    extends Assign<Omit<HtmlIngredientProps<'label'>, 'children'>, Omit<CreateSwitchProps, 'id'>> {
    children?: Snippet<[api: CreateSwitchReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {switchContext} from './context.svelte.js';
  import {createSwitch} from './create-switch.svelte.js';

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

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createSwitch({
    id: id ?? uid,
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

  switchContext.set(context);
</script>

<label {...attrs}>
  {@render children?.(context)}
</label>
