<script lang="ts" context="module">
  import type {Assign, OptionalId} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';
  import type {CreateCheckboxContextProps} from './context.svelte.js';

  export interface CheckboxProps
    extends Assign<SvelteHTMLElements['label'], OptionalId<CreateCheckboxContextProps>> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {nanoid} from 'nanoid/non-secure';
  import {createCheckboxContext, setCheckboxContext} from './context.svelte.js';

  let {
    id = nanoid(),
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
    value,
    checked,
    invalid,
    disabled,
    readOnly,
    required,
    onCheckedChange,
    getRootNode,
  });

  let attrs = $derived(mergeProps(props, context.api.getRootProps()));

  setCheckboxContext(context);
</script>

<label {...attrs}>
  {@render children?.()}
</label>
