<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {HighlightWordProps} from '@zag-js/highlight-word';

  export interface HighlightProps
    extends Assign<
      Omit<HtmlIngredientProps<'div', HTMLDivElement>, 'children'>,
      HighlightWordProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {highlightWord} from '@zag-js/highlight-word';

  let {ref = $bindable(null), asChild, ...props}: HighlightProps = $props();

  let [highlightWordProps, localProps] = $derived(
    createSplitProps<HighlightWordProps>([
      'text',
      'query',
      'matchAll',
      'ignoreCase',
    ])(props),
  );

  let chunks = $derived(highlightWord(highlightWordProps));
</script>

{#if asChild}
  {@render asChild(localProps)}
{:else}
  <div bind:this={ref} data-scope="highlight" data-part="root" {...localProps}>
    {#each chunks as chunk}
      {#if chunk.match}
        <mark>{chunk.text}</mark>
      {:else}
        {chunk.text}
      {/if}
    {/each}
  </div>
{/if}
