<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface ComboboxInputProps extends HtmlProps<'input'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'input'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';

  let {asChild, ...props}: ComboboxInputProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getInputProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
