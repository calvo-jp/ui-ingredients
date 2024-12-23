<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {
    CreateFieldProps,
    CreateFieldReturn,
  } from './create-field.svelte.js';

  export interface FieldProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateFieldReturn>,
        CreateFieldProps
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {mergeProps} from '$lib/merge-props.js';
  import type {PresenceStrategyProps} from '$lib/presence/create-presence.svelte.js';
  import {setPresenceStrategyPropsContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {createField} from './create-field.svelte.js';
  import {setFieldContext} from './field-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FieldProps = $props();

  let [presenceStrategyProps, rest] = $derived(
    createSplitProps<PresenceStrategyProps>(['keepMounted', 'lazyMount'])(
      props,
    ),
  );

  let [createFieldProps, localProps] = $derived(
    createSplitProps<CreateFieldProps>([
      'id',
      'ids',
      'invalid',
      'disabled',
      'readOnly',
      'required',
    ])(rest),
  );

  let field = createField(reflect(() => createFieldProps));

  let mergedProps = $derived(mergeProps(field.getRootProps(), localProps));

  setFieldContext(field);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, field)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(field)}
  </div>
{/if}
