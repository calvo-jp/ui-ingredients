<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxTriggerProps extends HtmlProps<'button'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {comboboxContext} from './context.svelte.js';

  let {children, ...props}: ComboboxTriggerProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getTriggerProps()));
</script>

<button type="button" {...attrs}>
  {@render children?.()}
</button>
