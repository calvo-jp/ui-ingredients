<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface NumberInputInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useNumberInputContext} from './context.svelte.js';

  let {...props}: NumberInputInputProps = $props();

  let context = useNumberInputContext();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
