<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface TagsInputControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getTagsInputContext} from './tags-input-context.svelte.js';

  let {this: e, asChild, children, ...props}: TagsInputControlProps = $props();

  let tagsInput = getTagsInputContext();

  let mergedProps = $derived(mergeProps(props, tagsInput.getControlProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
