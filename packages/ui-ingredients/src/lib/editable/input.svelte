<script lang="ts" context="module">
  import type {HtmlIngredientProps} from '$lib/types.js';

  export interface EditableInputProps extends HtmlIngredientProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useEditableContext} from './context.svelte.js';

  let {...props}: EditableInputProps = $props();

  let context = useEditableContext();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
