<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';
  import type {Action} from 'svelte/action';

  export interface DialogBackdropProps
    extends HtmlIngredientProps<'div', never, Action> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getPresenceStrategyPropsContext} from '$lib/presence/context.svelte.js';
  import {createPresence} from '$lib/presence/create-presence.svelte.js';
  import {getDialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogBackdropProps = $props();

  let dialog = getDialogContext();

  let presenceStrategyProps = getPresenceStrategyPropsContext();
  let presence = createPresence({
    get present() {
      return dialog.open;
    },
    get lazyMount() {
      return presenceStrategyProps.lazyMount;
    },
    get keepMounted() {
      return presenceStrategyProps.keepMounted;
    },
  });

  let mergedProps = $derived(
    mergeProps(props, dialog.getBackdropProps(), presence.getPresenceProps()),
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
