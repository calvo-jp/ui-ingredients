<script lang="ts" module>
  import type {HTMLProps} from '$lib/types.js';

  export interface SwitchHiddenInputProps extends HTMLProps<'input'> {}
</script>

<script lang="ts">
  import {mergeProps} from '$lib/merge-props.js';
  import {switchContext} from './context.svelte.js';

  let {...props}: SwitchHiddenInputProps = $props();

  let switch$ = switchContext.get();

  let mergedProps = $derived(mergeProps(props, switch$.getHiddenInputProps()));
</script>

<input {...mergedProps} />
