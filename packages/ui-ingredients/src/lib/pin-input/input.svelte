<script lang="ts" context="module">
  import type {Assign, HtmlIngredientProps} from '$lib/types.js';
  import type {InputProps} from '@zag-js/pin-input';

  export interface PinInputInputProps
    extends Assign<HtmlIngredientProps<'input'>, InputProps> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {usePinInputContext} from './context.svelte.js';

  let {index, ...props}: PinInputInputProps = $props();

  let context = usePinInputContext();

  let attrs = $derived(mergeProps(props, context.getInputProps({index})));
</script>

<input {...attrs} />
