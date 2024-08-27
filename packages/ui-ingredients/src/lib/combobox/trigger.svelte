<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface ComboboxTriggerProps extends HtmlProps<'button'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'button'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxTriggerProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getTriggerProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <button type="button" {...attrs}>
    {@render children?.()}
  </button>
{/if}
