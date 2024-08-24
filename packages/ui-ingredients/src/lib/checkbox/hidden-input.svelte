<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface CheckboxHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {checkboxContext} from './context.svelte.js';

  let {...props}: CheckboxHiddenInputProps = $props();

  let context = checkboxContext.get();

  let attrs = $derived(mergeProps(props, context.getHiddenInputProps()));
</script>

<input {...attrs} />
