<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SegmentGroupLabelProps extends HtmlIngredientProps<'span'> {}
</script>

<script lang="ts">
  import {ensureStyleIsString} from '$lib/utils.js';
  import {mergeProps} from '@zag-js/svelte';
  import {parts} from './anatomy.js';
  import {useSegmentGroupContext} from './context.svelte.js';

  let {children, ...props}: SegmentGroupLabelProps = $props();

  let context = useSegmentGroupContext();

  let attrs = $derived(
    mergeProps(props, context.getLabelProps(), parts.label.attrs),
  );
</script>

<span {...ensureStyleIsString(attrs)}>
  {@render children?.()}
</span>
