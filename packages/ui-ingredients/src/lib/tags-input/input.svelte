<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface TagsInputInputProps extends HtmlProps<'input'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'input'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {tagsInputContext} from './context.svelte.js';

  let {asChild, ...props}: TagsInputInputProps = $props();

  let tagsInput = tagsInputContext.get();

  let attrs = $derived(mergeProps(props, tagsInput.getInputProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
