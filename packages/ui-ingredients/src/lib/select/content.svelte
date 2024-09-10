<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface SelectContentProps
    extends HtmlIngredientProps<'div', never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getSelectContext} from './context.svelte.js';

  let {asChild, children, ...props}: SelectContentProps = $props();

  let select = getSelectContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, select.getContentProps(), presence.getPresenceProps()),
  );
</script>

{#if presence.mounted}
  {#if asChild}
    {@render asChild(presence.ref, mergedProps)}
  {:else}
    <div use:presence.ref {...mergedProps}>
      {@render children?.()}
    </div>
  {/if}
{/if}
