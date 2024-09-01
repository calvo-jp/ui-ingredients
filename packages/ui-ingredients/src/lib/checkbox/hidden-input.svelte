<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface CheckboxHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {checkboxContext} from './context.svelte.js';

  let {...props}: CheckboxHiddenInputProps = $props();

  let field = getFieldContext();
  let checkbox = checkboxContext.get();

  let mergedProps = $derived(mergeProps(props, checkbox.getHiddenInputProps()));
</script>

<input aria-describedby={field?.['aria-describedby']} {...mergedProps} />
