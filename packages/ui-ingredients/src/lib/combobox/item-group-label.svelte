<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxItemGroupLabelProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext, comboboxItemGroupPropsContext} from './context.svelte.js';

  let {children, ...props}: ComboboxItemGroupLabelProps = $props();

  let combobox = comboboxContext.get();
  let itemGroupProps = comboboxItemGroupPropsContext.get();

  let attrs = $derived(
    mergeProps(
      props,
      combobox.getItemGroupLabelProps({
        htmlFor: itemGroupProps.id,
      }),
    ),
  );
</script>

<div {...attrs}>
  {@render children?.()}
</div>
