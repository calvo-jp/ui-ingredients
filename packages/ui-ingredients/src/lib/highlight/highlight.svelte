<script lang="ts" module>
  import type {HighlightWordProps} from '@zag-js/highlight-word';
  import type {Assign, HtmlIngredientProps} from '../types.js';

  export interface HighlightProps
    extends Assign<
      Omit<HtmlIngredientProps<'div', HTMLDivElement>, 'children'>,
      HighlightWordProps
    > {}
</script>

<script lang="ts">
  import {highlightWord} from '@zag-js/highlight-word';
  import {createSplitProps} from '../create-split-props.js';

  let {ref = $bindable(null), asChild, ...props}: HighlightProps = $props();

  let [highlightWordProps, localProps] = $derived(
    createSplitProps<HighlightWordProps>([
      'ignoreCase',
      'matchAll',
      'query',
      'text',
    ])(props),
  );

  let chunks = $derived(highlightWord(highlightWordProps));

  let mergedProps = $derived({
    ...localProps,
    'data-scope': 'highlight',
    'data-part': 'root',
  });
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {#each chunks as chunk}
      {#if chunk.match}
        <mark>{chunk.text}</mark>
      {:else}
        {chunk.text}
      {/if}
    {/each}
  </div>
{/if}
