<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface ComboboxContentProps
    extends HtmlIngredientProps<'div', HTMLDivElement, never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getComboboxContext} from './context.svelte.js';

  let {this: e, asChild, children, ...props}: ComboboxContentProps = $props();

  let combobox = getComboboxContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, combobox.getContentProps(), presence.getPresenceProps()),
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
