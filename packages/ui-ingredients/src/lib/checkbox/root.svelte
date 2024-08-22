<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {
    CreateCheckboxContextProps,
    CreateCheckboxContextReturn,
  } from './context.svelte.js';

  export interface CheckboxProps
    extends Assign<
      Omit<HtmlIngredientProps<'label'>, 'children'>,
      Omit<CreateCheckboxContextProps, 'id'>
    > {
    children?: Snippet<[context: CreateCheckboxContextReturn]>;
  }
</script>

<script lang="ts">
  import {useEnvironmentContext} from '$lib/environment-provider/index.js';
  import {useLocaleContext} from '$lib/locale-provider/index.js';
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createCheckboxContext, setCheckboxContext} from './context.svelte.js';

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

  let localeContext = useLocaleContext();
  let environmentContext = useEnvironmentContext();

  let context = createCheckboxContext({
    id: id ?? uuid(),
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

  setCheckboxContext(context);
</script>

<label {...attrs}>
  {@render children?.(context)}
</label>
