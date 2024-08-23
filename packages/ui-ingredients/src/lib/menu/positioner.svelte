<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface MenuPositionerProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useMenuContext} from './context.svelte.js';

  let {children, ...props}: MenuPositionerProps = $props();

  let context = useMenuContext();

  let attrs = $derived(mergeProps(props, context.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
