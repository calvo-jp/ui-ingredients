<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface FieldErrorTextProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {getFieldContext} from './field-context.svelte.js';

  let {this: e, asChild, children, ...props}: FieldErrorTextProps = $props();

  let field = getFieldContext();

  let mergedProps = $derived(mergeProps(props, field.getErrorTextProps()));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={e} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
