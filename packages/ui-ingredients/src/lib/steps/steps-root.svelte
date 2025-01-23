<script lang="ts" module>
  import type {PresenceStrategyProps} from '../presence/create-presence.svelte.js';
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateStepsProps,
    CreateStepsReturn,
  } from './create-steps.svelte.js';

  export interface StepsProps
    extends Assign<
        HtmlIngredientProps<'div', HTMLDivElement, CreateStepsReturn>,
        CreateStepsProps
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
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: StepsProps = $props();

  let [presenceStrategyProps, rest] = $derived(
    createSplitProps<PresenceStrategyProps>(['lazyMount', 'keepMounted'])(
      props,
    ),
  );

  let [createStepsProps, localProps] = $derived(
    createSplitProps<CreateStepsProps>([
      'count',
      'id',
      'ids',
      'linear',
      'onStepChange',
      'onStepComplete',
      'orientation',
      'step',
    ])(rest),
  );

  let steps = createSteps(reflect(() => createStepsProps));
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
