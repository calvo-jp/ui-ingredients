<script lang="ts" module>
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateFieldProps,
    CreateFieldReturn,
  } from './create-field.svelte.js';

  export interface FieldProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateFieldReturn>,
        Optional<CreateFieldProps, 'id'>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import {setPresenceStrategyPropsContext} from '../presence/presence-context.svelte.js';
  import {createField} from './create-field.svelte.js';
  import {setFieldContext} from './field-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FieldProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, fieldProps] = $derived(
    createSplitProps<PresenceStrategyProps>([
      'keepMounted',
      'lazyMount',
      'animateOnMount',
    ])(props),
  );

  let [createFieldProps, localProps] = $derived(
    createSplitProps<Omit<CreateFieldProps, 'id'>>([
      'ids',
      'invalid',
      'disabled',
      'readOnly',
      'required',
    ])(fieldProps),
  );

  let field = createField(
    reflect(() => ({...createFieldProps, id: id ?? uid})),
  );

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
