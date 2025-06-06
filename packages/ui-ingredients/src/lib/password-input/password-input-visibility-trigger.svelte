<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PasswordInputVisibilityTriggerProps
    extends HtmlIngredientProps<'button', HTMLButtonElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPasswordInputContext} from './password-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PasswordInputVisibilityTriggerProps = $props();

  let passwordInput = getPasswordInputContext();
  let mergedProps = $derived(
    mergeProps(passwordInput.getVisibilityTriggerProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <button bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </button>
{/if}
