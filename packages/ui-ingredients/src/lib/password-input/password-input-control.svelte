<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface PasswordInputControlProps
    extends HtmlIngredientProps<'div', HTMLDivElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {getPasswordInputContext} from './password-input-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: PasswordInputControlProps = $props();

  let passwordInput = getPasswordInputContext();
  let mergedProps = $derived(
    mergeProps(passwordInput.getControlProps(), props),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
