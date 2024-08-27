<script lang="ts" module>
  import type {Assign, HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';
  import type {CreateSwitchProps, CreateSwitchReturn} from './create-switch.svelte.js';

  export interface SwitchProps
    extends Assign<Omit<HtmlProps<'label'>, 'children'>, CreateSwitchProps> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'label'>, 'children'>]>;
    children?: Snippet<[switch$: CreateSwitchReturn]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {switchContext} from './context.svelte.js';
  import {createSwitch} from './create-switch.svelte.js';

  let {
    id,
    ids,
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
    asChild,
    children,
    ...props
  }: SwitchProps = $props();

  let switch$ = createSwitch({
    id,
    ids,
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
  });

  let attrs = $derived(mergeProps(props, switch$.getRootProps()));

  switchContext.set(switch$);
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.(switch$)}
  </label>
{/if}
