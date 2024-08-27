<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface NumberInputLabelProps extends HtmlProps<'label'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'label'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, children, ...props}: NumberInputLabelProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <label {...attrs}>
    {@render children?.()}
  </label>
{/if}
