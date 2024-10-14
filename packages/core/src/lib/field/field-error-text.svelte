<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface FieldErrorTextProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {getPresenceStrategyPropsContext} from '$lib/presence/presence-context.svelte.js';
  import {reflect} from '@zag-js/svelte';
  import {getFieldContext} from './field-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: FieldErrorTextProps = $props();

  let field = getFieldContext();

  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence(
    reflect(() => ({
      present: field?.invalid ?? true,
      ...presenceStrategyProps,
    })),
  );

  let mergedProps = $derived(
    mergeProps(
      field?.getErrorTextProps() ?? {},
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
