<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface DatePickerContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getDatePickerContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: DatePickerContentProps = $props();

  let datePicker = getDatePickerContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(
      props,
      datePicker.getContentProps(),
      presence.getPresenceProps(),
    ),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.ref, mergedProps)}
  {:else}
    <div bind:this={e} use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
