<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface DialogBackdropProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {getDialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogBackdropProps = $props();

  let dialog = getDialogContext();
  let presence = createPresence({
    get present() {
      return dialog.open;
    },
  });

  let mergedProps = $derived(
    mergeProps(props, dialog.getBackdropProps(), presence.getRootProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
