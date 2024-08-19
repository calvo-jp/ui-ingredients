<script lang="ts" context="module">
  import type {Assign, OptionalId, WithoutChildren} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateCheckboxContextProps, CreateCheckboxContextReturn} from './context.svelte.js';

  export interface CheckboxProps
    extends Assign<
      WithoutChildren<SvelteHTMLElements['label']>,
      OptionalId<CreateCheckboxContextProps>
    > {
    children?: Snippet<[CreateCheckboxContextReturn]>;
  }
</script>

<script lang="ts">
  import {uuid} from '$lib/utils.svelte.js';
  import {mergeProps} from '@zag-js/svelte';
  import {createCheckboxContext, setCheckboxContext} from './context.svelte.js';

  let {
    id = uuid(),
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

  let context = createCheckboxContext({
    id,
    ids,
    dir,
    form,
    name,
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

  setCheckboxContext(context);
</script>

<label {...attrs}>
  {@render children?.(context)}
</label>
