<script lang="ts" module>
  import type {AsChild, HTMLProps} from '$lib/types.js';

  export interface FieldHelperTextProps extends HTMLProps<'div'> {
    asChild?: AsChild;
  }
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {fieldContext} from './context.svelte.js';

  let {asChild, children, ...props}: FieldHelperTextProps = $props();

  let field = fieldContext.get();

  let mergedProps = $derived(mergeProps(props, field.getHelperTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
