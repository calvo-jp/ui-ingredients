<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface NumberInputInputProps extends HtmlProps<'input'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'input'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {numberInputContext} from './context.svelte.js';

  let {asChild, ...props}: NumberInputInputProps = $props();

  let numberInput = numberInputContext.get();

  let attrs = $derived(mergeProps(props, numberInput.getInputProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
