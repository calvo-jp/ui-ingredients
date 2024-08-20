<script lang="ts" context="module">
  import type {Assign} from '$lib/types.js';
  import type {SvelteHTMLElements} from 'svelte/elements';

  export interface EditableInputProps extends Assign<SvelteHTMLElements['input'], {}> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {useEditableContext} from './context.svelte.js';

  let {...props}: EditableInputProps = $props();

  let context = useEditableContext();

  let attrs = $derived(mergeProps(props, context.getInputProps()));
</script>

<input {...attrs} />
