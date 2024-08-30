<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface DialogPositionerProps extends HTMLProps<'div'> {
    asChild?: Snippet<[mergedProps: Omit<HTMLProps<'div'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {dialogContext} from './context.svelte.js';

  let {asChild, children, ...props}: DialogPositionerProps = $props();

  let dialog = dialogContext.get();

  let mergedProps = $derived(mergeProps(props, dialog.getPositionerProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
