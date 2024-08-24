<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface EditableInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {editableContext} from './context.svelte.js';

  let {...props}: EditableInputProps = $props();

  let context = editableContext.get();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
