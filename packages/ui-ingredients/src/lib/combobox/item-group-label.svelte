<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxItemGroupLabelProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext, comboboxItemGroupPropsContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemGroupLabelProps = $props();

  let context = comboboxContext.get();

  let itemGroupProps = comboboxItemGroupPropsContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      context.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
    ),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
