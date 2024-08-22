<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SwitchControlProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useSwitchContext} from './context.svelte.js';

  let {children, ...props}: SwitchControlProps = $props();

  let context = useSwitchContext();

  let attrs = $derived(mergeProps(props, context.getControlProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
