<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateSwitchContextProps} from './context.svelte.js';

  export interface SwitchProps
    extends Assign<SvelteHTMLElements['label'], OptionalId<CreateSwitchContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createSwitchContext, setSwitchContext} from './context.svelte.js';

  let {
    id = nanoid(),
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

  let mergedProps = $derived(mergeProps(props, context.api.getRootProps()));

  setSwitchContext(context);
</script>

<label {...mergedProps}>
  {@render children?.()}
</label>
