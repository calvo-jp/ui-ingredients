<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface RadioGroupItemHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/utils.svelte.js';
  import {radioGroupContext, radioGroupItemPropsContext} from './context.svelte.js';

  let {...props}: RadioGroupItemHiddenInputProps = $props();

  let radioGroup = radioGroupContext.get();
  let itemProps = radioGroupItemPropsContext.get();

  let attrs = $derived(mergeProps(props, radioGroup.getItemHiddenInputProps(itemProps)));
</script>

<input {...attrs} />
