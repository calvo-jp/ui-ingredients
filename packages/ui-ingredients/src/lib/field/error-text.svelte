<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FieldErrorTextProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFieldContext} from './context.svelte.js';

  let {asChild, children, ...props}: FieldErrorTextProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(props, field.getErrorTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
