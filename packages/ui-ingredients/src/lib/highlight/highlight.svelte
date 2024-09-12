<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {HighlightWordProps} from '@zag-js/highlight-word';

  export interface HighlightProps
    extends Assign<
      Omit<HtmlIngredientProps<'div'>, 'children'>,
      HighlightWordProps
    > {}
</script>

<script lang="ts">
  import {highlightWord} from '@zag-js/highlight-word';
  import {createSplitProps} from '@zag-js/utils';

  let {asChild, ...props}: HighlightProps = $props();

  let [highlightProps, localProps] = $derived(
    createSplitProps<HighlightWordProps>([
      'text',
      'query',
      'matchAll',
      'ignoreCase',
    ])(props),
  );

  let chunks = $derived(highlightWord(highlightProps));
</script>

{#if asChild}
  {@render asChild(localProps)}
{:else}
  <div {...localProps}>
    {#each chunks as chunk}
      {#if chunk.match}
        <mark>{chunk.text}</mark>
      {:else}
        {chunk.text}
      {/if}
    {/each}
  </div>
{/if}
