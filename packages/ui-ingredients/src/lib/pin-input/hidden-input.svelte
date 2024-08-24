<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface PinInputHiddenInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {pinInputContext} from './context.svelte.js';

  let {...props}: PinInputHiddenInputProps = $props();

  let context = pinInputContext.get();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps()));
</script>

<input {...attrs} />
