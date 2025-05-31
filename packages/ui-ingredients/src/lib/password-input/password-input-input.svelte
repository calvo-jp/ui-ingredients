<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PasswordInputInputProps
    extends HtmlIngredientProps<'input', HTMLInputElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPasswordInputContext} from './password-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    ...props
  }: PasswordInputInputProps = $props();

  let passwordInput = getPasswordInputContext();
  let mergedProps = $derived(mergeProps(passwordInput.getInputProps(), props));
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <input bind:this={ref} {...mergedProps} />
{/if}
