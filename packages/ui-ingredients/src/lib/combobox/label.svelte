<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxLabelProps extends HtmlProps<'label'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxLabelProps = $props();

  let context = comboboxContext.get();

  let attrs = $derived(mergeProps(props, context.getLabelProps()));
</script>

<label {...attrs}>
  {@render children?.()}
</label>
