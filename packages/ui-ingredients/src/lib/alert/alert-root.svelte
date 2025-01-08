<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';
  import type {CreateAlertReturn} from './create-alert.svelte.js';

  export interface AlertProps
    extends HtmlIngredientProps<'div', HTMLDivElement, CreateAlertReturn> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {setAlertContext} from './alert-context.js';
  import {createAlert} from './create-alert.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertProps = $props();

  let alert = createAlert();
  let mergedProps = $derived(mergeProps(alert.getRootProps(), props));

  setAlertContext(alert);
</script>

{#if asChild}
  {@render asChild(mergedProps, alert)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(alert)}
  </div>
{/if}
