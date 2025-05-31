<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PasswordInputLabelProps
    extends HtmlIngredientProps<'label', HTMLLabelElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPasswordInputContext} from './password-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PasswordInputLabelProps = $props();

  let passwordInput = getPasswordInputContext();
  let mergedProps = $derived(mergeProps(passwordInput.getLabelProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <label bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </label>
{/if}
