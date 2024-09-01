<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FieldLabelProps extends HTMLProps<'label'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {fieldContext} from './context.svelte.js';

  let {children, asChild, ...props}: FieldLabelProps = $props();

  let field = fieldContext.get();

  let mergedProps = $derived(mergeProps(props, field.getLabelProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
