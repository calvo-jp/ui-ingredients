<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface RatingGroupHiddenInputProps
    extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getRatingGroupContext} from './context.svelte.js';

  let {this: e, asChild, ...props}: RatingGroupHiddenInputProps = $props();

  let radioGroup = getRatingGroupContext();

  let mergedProps = $derived(
    mergeProps(props, radioGroup.getHiddenInputProps()),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={e} {...mergedProps} />
{/if}
