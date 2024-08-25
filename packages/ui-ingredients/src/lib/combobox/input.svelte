<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface ComboboxInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {comboboxContext} from './context.svelte.js';

  let {...props}: ComboboxInputProps = $props();

  let combobox = comboboxContext.get();

  let attrs = $derived(mergeProps(props, combobox.getInputProps()));
</script>

<input {...attrs} />
