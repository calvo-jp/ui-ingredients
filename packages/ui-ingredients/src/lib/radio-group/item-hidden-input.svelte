<script lang="ts" module>
  import type {HtmlProps} from '$lib/types.js';

  export interface RadioGroupItemHiddenInputProps extends HtmlProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '@zag-js/svelte';
  import {radioGroupContext, radioGroupItemPropsContext} from './context.svelte.js';

  let {...props}: RadioGroupItemHiddenInputProps = $props();

  let context = radioGroupContext.get();

  let itemProps = radioGroupItemPropsContext.get();

  let attrs = $derived(mergeProps(props, context.getItemHiddenInputProps(itemProps)));
</script>

<input {...attrs} />
