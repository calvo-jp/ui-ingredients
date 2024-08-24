<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface SwitchThumbProps extends HtmlIngredientProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {switchContext} from './context.svelte.js';

  let {children, ...props}: SwitchThumbProps = $props();

  let context = switchContext.get();

  let attrs = $derived(mergeProps(props, context.getThumbProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
