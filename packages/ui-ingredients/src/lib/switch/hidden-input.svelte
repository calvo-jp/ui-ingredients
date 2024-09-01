<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface SwitchHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {getFieldContext} from '$lib/field/context.svelte.js';
  import {mergeProps} from '$lib/merge-props.js';
  import {switchContext} from './context.svelte.js';

  let {...props}: SwitchHiddenInputProps = $props();

  let field = getFieldContext();
  let switch$ = switchContext.get();

  let mergedProps = $derived(mergeProps(props, switch$.getHiddenInputProps()));
</script>

<input aria-describedby={field?.['aria-describedby']} {...mergedProps} />
