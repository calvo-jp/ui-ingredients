<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxPositionerProps extends HtmlProps<'div'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxPositionerProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getPositionerProps()));
</script>

<div {...attrs}>
  {@render children?.()}
</div>
