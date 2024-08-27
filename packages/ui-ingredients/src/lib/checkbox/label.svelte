<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface CheckboxLabelProps extends HtmlProps<'div'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'div'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {checkboxContext} from './context.svelte.js';

  let {asChild, children, ...props}: CheckboxLabelProps = $props();

  let checkbox = checkboxContext.get();

  let attrs = $derived(mergeProps(props, checkbox.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <div {...attrs}>
    {@render children?.()}
  </div>
{/if}
