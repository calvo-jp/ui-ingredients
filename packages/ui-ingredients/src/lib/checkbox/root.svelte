<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateCheckboxProps, CreateCheckboxReturn} from './create-checkbox.svelte.js';

  export interface CheckboxProps
    extends Assign<Omit<HtmlProps<'label'>, 'children'>, Omit<CreateCheckboxProps, 'id'>> {
    children?: Snippet<[api: CreateCheckboxReturn]>;
  }
</script>

<script lang="ts">
  import {getEnvironmentContext} from '$lib/environment-provider/index.js';
  import {getLocaleContext} from '$lib/locale-provider/index.js';
  import {createUniqueId} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {checkboxContext} from './context.svelte.js';
  import {createCheckbox} from './create-checkbox.svelte.js';

  let {
    id,
    ids,
    dir,
    form,
    name,
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
  }: CheckboxProps = $props();

  let localeContext = getLocaleContext();
  let environmentContext = getEnvironmentContext();

  let uid = createUniqueId();

  let context = createCheckbox({
    id: id ?? uid,
    ids,
    dir: dir ?? localeContext?.dir,
    form,
    name,
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

  checkboxContext.set(context);
</script>

<label {...attrs}>
  {@render children?.(context)}
</label>
