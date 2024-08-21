<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ComboboxInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useComboboxContext} from './context.svelte.js';

  let {...props}: ComboboxInputProps = $props();

  let context = useComboboxContext();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
