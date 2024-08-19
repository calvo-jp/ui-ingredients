<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateSwitchContextProps, CreateSwitchContextReturn} from './context.svelte.js';

  export interface SwitchProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['label']>,
      OptionalId<CreateSwitchContextProps>
    > {
    children?: Snippet<[CreateSwitchContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createSwitchContext, setSwitchContext} from './context.svelte.js';

  let {
    id = uuid(),
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

  let context = createSwitchContext({
    id,
    ids,
    dir,
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
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.getRootProps()));

  setSwitchContext(context);
</script>

<label {...attrs}>
  {@render children?.(context)}
</label>
