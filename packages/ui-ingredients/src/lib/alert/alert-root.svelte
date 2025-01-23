<script lang="ts" module>
  import type {Assign, HtmlIngredientProps} from '../types.js';
  import type {
    CreateAlertProps,
    CreateAlertReturn,
  } from './create-alert.svelte.js';

  export interface AlertProps
    extends Assign<
      HtmlIngredientProps<'div', HTMLDivElement, CreateAlertReturn>,
      CreateAlertProps
    > {}
</script>

<script lang="ts">
  import {createSplitProps} from '$lib/create-split-props.js';
  import {reflect} from '@zag-js/svelte';
  import {mergeProps} from '../merge-props.js';
  import {setAlertContext} from './alert-context.js';
  import {createAlert} from './create-alert.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: AlertProps = $props();

  let [createAlertProps, localProps] = $derived(
    createSplitProps<CreateAlertProps>(['id'])(props),
  );

  let alert = createAlert(reflect(() => createAlertProps));
  let mergedProps = $derived(mergeProps(alert.getRootProps(), localProps));

  setAlertContext(alert);
</script>

{#if asChild}
  {@render asChild(mergedProps, alert)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.(alert)}
  </div>
{/if}
