<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FieldInputProps extends HTMLProps<'input'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFieldContext} from './context.svelte.js';

  let {asChild, ...props}: FieldInputProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(props, field.getInputProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input {...mergedProps} />
{/if}
