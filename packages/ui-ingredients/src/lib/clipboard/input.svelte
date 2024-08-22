<script lang="ts" module>
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface ClipboardInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useClipboardContext} from './context.svelte.js';

  let {...props}: ClipboardInputProps = $props();

  let context = useClipboardContext();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
