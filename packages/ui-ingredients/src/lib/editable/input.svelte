<script lang="ts" module>
  import type {AsChild, HtmlProps} from '$lib/types.js';

  export interface EditableInputProps extends HtmlProps<'input'> {
    asChild?: AsChild<HtmlProps<'input'>>;
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
