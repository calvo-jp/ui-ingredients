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

  let attrs = $derived(mergeProps(alert.getRootProps(), props));

  setAlertContext(alert);
</script>

{#if asChild}
  {@render asChild(attrs, alert)}
{:else}
  <div bind:this={ref} {...attrs}>
    {@render children?.(alert)}
  </div>
{/if}
