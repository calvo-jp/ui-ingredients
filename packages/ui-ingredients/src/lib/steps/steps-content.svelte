<script lang="ts" module>
  import type {ItemProps} from '@zag-js/steps';
  import type {Action} from 'svelte/action';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface StepsContentProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, never, Action>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps, reflect} from '@zag-js/svelte';
  import {createPresence} from '../presence/create-presence.svelte.js';
  import {getPresenceStrategyPropsContext} from '../presence/presence-context.svelte.js';
  import {getStepsContext} from './steps-context.svelte.js';

  let {
    ref = $bindable(null),
    index,
    asChild,
    children,
    ...props
  }: StepsContentProps = $props();

  let steps = getStepsContext();

  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence(
    reflect(() => ({
      ...presenceStrategyProps,
      present: steps.value === index,
    })),
  );

  let mergedProps = $derived(
    mergeProps(
      steps.getContentProps({index}),
      presence.getPresenceProps(),
      props,
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.setReference, mergedProps)}
  {:else}
    <div use:presence.setReference bind:this={ref} {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
