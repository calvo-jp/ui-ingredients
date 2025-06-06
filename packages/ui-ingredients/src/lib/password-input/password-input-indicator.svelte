<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PasswordInputIndicatorProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPasswordInputContext} from './password-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PasswordInputIndicatorProps = $props();

  let passwordInput = getPasswordInputContext();
  let mergedProps = $derived(
    mergeProps(passwordInput.getIndicatorProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <span bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </span>
{/if}
