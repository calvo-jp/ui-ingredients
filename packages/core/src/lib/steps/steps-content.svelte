<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {ItemProps} from '@zag-js/steps';
  import type {Action} from 'svelte/action';

  export interface StepsContentProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, never, Action>,
      ItemProps
    > {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {getPresenceStrategyPropsContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
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
