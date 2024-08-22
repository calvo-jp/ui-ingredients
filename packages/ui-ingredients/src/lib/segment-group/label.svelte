<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {useSegmentGroupContext} from './context.svelte.js';

  let {children, ...props}: SegmentGroupLabelProps = $props();

  let context = useSegmentGroupContext();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<span {...attrs} {...parts.label.attrs}>
  {@render children?.()}
</span>
