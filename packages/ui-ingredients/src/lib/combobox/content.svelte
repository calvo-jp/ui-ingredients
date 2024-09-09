<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxContentProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceContext} from '$lib/presence/context.svelte.js';
  import {getComboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxContentProps = $props();

  let combobox = getComboboxContext();
  let presence = getPresenceContext();

  let mergedProps = $derived(
    mergeProps(props, combobox.getContentProps(), presence.getRootProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
