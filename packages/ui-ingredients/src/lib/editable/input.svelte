<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';
  import type {Snippet} from 'svelte';

  export interface EditableInputProps extends HtmlProps<'input'> {
    asChild?: Snippet<[attrs: Omit<HtmlProps<'input'>, 'children'>]>;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {editableContext} from './context.svelte.js';

  let {asChild, ...props}: EditableInputProps = $props();

  let editable = editableContext.get();

  let attrs = $derived(mergeProps(props, editable.getInputProps()));
</script>

{#if asChild}
  {@render asChild(attrs)}
{:else}
  <input {...attrs} />
{/if}
