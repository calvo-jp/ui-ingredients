<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface ComboboxLabelProps extends HtmlProps<'label'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'label'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: ComboboxLabelProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
