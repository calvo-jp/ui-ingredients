<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps, Optional} from '../types.js';
  import type {
    CreateStepsProps,
    CreateStepsReturn,
  } from './create-steps.svelte.js';

  export interface StepsProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateStepsReturn>,
        Optional<CreateStepsProps, 'id'>
      >,
      PresenceStrategyProps {}
</script>

<script lang="ts">
  import {reflect} from '@zag-js/svelte';
  import {createSplitProps} from '../create-split-props.js';
  import {mergeProps} from '../merge-props.js';
  import {setPresenceStrategyPropsContext} from '../presence/presence-context.svelte.js';
  import {createSteps} from './create-steps.svelte.js';
  import {setStepsContext} from './steps-context.svelte.js';

  let {
    id,
    ref = $bindable(null),
    asChild,
    children,
    ...rest
  }: StepsProps = $props();

  let uid = $props.id();

  let [presenceStrategyProps, otherProps] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(rest),
  );

  let [createStepsProps, localProps] = $derived(
    createSplitProps<Omit<CreateStepsProps, 'id'>>([
      'count',
      'defaultStep',
      'ids',
      'linear',
      'onStepChange',
      'onStepComplete',
      'orientation',
      'step',
    ])(otherProps),
  );

  let steps = createSteps(
    reflect(() => ({...createStepsProps, id: id ?? uid})),
  );

  let mergedProps = $derived(mergeProps(steps.getRootProps(), localProps));

  setStepsContext(steps);
  setPresenceStrategyPropsContext(() => presenceStrategyProps);
</script>

{#if asChild}
  {@render asChild(mergedProps, steps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(steps)}
  </div>
{/if}
