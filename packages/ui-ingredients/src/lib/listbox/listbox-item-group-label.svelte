<script lang="ts" module>
  import type {HtmlIngredientProps} from '../types.js';

  export interface ListboxItemGroupLabelProps
    extends HtmlIngredientProps<'span', HTMLSpanElement> {}
</script>

<script lang="ts">
  import {mergeProps} from '../merge-props.js';
  import {
    getListboxContext,
    getListboxItemGroupPropsContext,
  } from './listbox-context.svelte.js';

  let {
    ref = $bindable(null),
    asChild,
    children,
    ...props
  }: ListboxItemGroupLabelProps = $props();

  let listbox = getListboxContext();
  let itemGroupProps = getListboxItemGroupPropsContext();
  let mergedProps = $derived(
    mergeProps(
      listbox.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
      props,
    ),
  );
</script>

{#if asChild}
  {@render asChild(mergedProps)}
{:else}
  <div bind:this={ref} {...mergedProps}>
    {@render children?.()}
  </div>
{/if}
