<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface SelectItemGroupLabelProps extends HtmlProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {selectContext, selectItemGroupPropsContext} from './context.svelte.js';

  let {children, ...props}: SelectItemGroupLabelProps = $props();

  let context = selectContext.get();

  let itemGroupProps = selectItemGroupPropsContext.get();

  let attrs = $derived(
    mergeProps(props, context.getItemGroupLabelProps({htmlFor: itemGroupProps.id})),
  );
</script>

<span {...attrs}>
  {@render children?.()}
</span>
