<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TimePickerContentProps
    extends HtmlIngredientProps<'div', never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import type {Action} from 'svelte/action';
  import {getTimePickerContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: TimePickerContentProps = $props();

  let timePicker = getTimePickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      timePicker.getContentProps(),
      presence.getPresenceProps(),
    ),
  );
</script>

{#if asChild}
  {@render asChild(presence.ref, mergedProps)}
{:else}
  <div bind:this={e} use:presence.ref {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
